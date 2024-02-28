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
    throw { code: `auth/missing-fields` }
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
    throw { code: error.code };
  }
}

export const POST: APIRoute = async (context) => {
  return registerUser({ request: context.request });
};