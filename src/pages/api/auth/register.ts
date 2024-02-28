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


  // Función para decodificar un mensaje base64
  function decodificarMensaje(mensajeBase64 : string) {
    return Buffer.from(mensajeBase64, 'base64').toString('utf-8');
  }


  // Create response with redirection and buffered error message
  function redirectionConstructor(url: string, errorMessage: string) {
    const bufferedMessage = Buffer.from(errorMessage).toString('base64')
    const redirectUrl = `${url}?error=${bufferedMessage}`; // Construir la URL de redirección con el mensaje de error como parámetro
    const headers = { "Location": redirectUrl };
    return new Response(null, { status: 302, headers });
  }

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
        redirectionConstructor("/email-already-exists", "El email que ingresaste ya está registrado")
        
        
      case "auth/id-token-expired":
      case "auth/session-cookie-expired":
      case "auth/id-token-revoked":
      case "auth/session-cookie-revoked":
        redirectionConstructor("/email-already-exists", "Token is expired or revoked")
  
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
        return new Response("Invalid argument", { status: 400 });
  
      default:
        console.error("Error creating user:", error);
        redirectionConstructor("/email-already-exists", "An error")
    }
  }
  return redirect("/signin");

};