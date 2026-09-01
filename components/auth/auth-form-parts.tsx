import { ReactNode } from "react"

export function AuthFormField({
  children,
}: {
  children: ReactNode
}) {
  return <div className="space-y-2">{children}</div>
}

export function AuthFormButton({
  children,
}: {
  children: ReactNode
}) {
  return <div>{children}</div>
}
