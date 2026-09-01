import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"

export async function redirectIfSignedIn() {
  const session = await auth.api.getSession()
  if (session) {
    redirect("/app")
  }
}

export async function getSession() {
  return await auth.api.getSession()
}
