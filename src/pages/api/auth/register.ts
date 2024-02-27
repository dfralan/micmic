import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response(
      "Missing form data",
      { status: 400 }
    );
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
    return redirect("/signin");
  } catch (error: any) {
    switch (error.code) {
      case "auth/claims-too-large":
        return new Response("Claims payload exceeds maximum allowed size", { status: 400 });
      case "auth/email-already-exists":
        alert("email already in use ");
      case "auth/id-token-expired":
      case "auth/session-cookie-expired":
        return new Response("Token is expired", { status: 400 });
      case "auth/id-token-revoked":
      case "auth/session-cookie-revoked":
        return new Response("Token has been revoked", { status: 400 });
      case "auth/insufficient-permission":
        return new Response("Insufficient permissions", { status: 400 });
      case "auth/internal-error":
        return new Response("Internal server error", { status: 500 });
      case "auth/invalid-argument":
      case "auth/invalid-claims":
      case "auth/invalid-disabled-field":
      case "auth/invalid-display-name":
      case "auth/invalid-email":
      case "auth/invalid-email-verified":
      // Handle other specific invalid cases as needed
        return new Response("Invalid argument", { status: 400 });
      // Add cases for other specific errors as needed
      default:
        console.error("Error creating user:", error);
        return new Response("An error occurred", { status: 500 }); // Use 500 for unknown errors
    }
  }
  return redirect("/signin");

};