import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";

export async function registerUser({ request }: any): Promise<Response> {
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
    return new Response("OK", { status: 200 });
  } catch (error: any) {
    switch (error.code) {
      case "auth/email-already-in-use":
        // Handle the case where email is already in use
        // For example: console.log("Email is already in use");
        return new Response("Email is already in use", { status: 400 });
      case "auth/id-token-revoked":
        // Handle the case where the ID token has been revoked
        // For example: console.log("ID token has been revoked");
        return new Response("ID token has been revoked", { status: 400 });
      case "auth/insufficient-permission":
        // Handle the case where there are insufficient permissions
        // For example: console.log("Insufficient permissions");
        return new Response("Insufficient permissions", { status: 400 });
      default:
        // Handle other errors
        console.error("Error creating user:", error);
        return new Response("An error occurred", { status: 500 }); // Use 500 for unknown errors
    }
  }
}

export const POST: APIRoute = async (context) => {
  return registerUser({ request: context.request });
};