import type { Metadata } from "next"
import ShaderPlayground from "@/components/shader-playground/ShaderPlayground"

export const metadata: Metadata = {
  title: "Shader Playground — Cloud Iridescence",
  description: "Design environment for iterating on the cloud iridescence hero shader",
}

export default function ShaderPlaygroundPage() {
  return <ShaderPlayground />
}
