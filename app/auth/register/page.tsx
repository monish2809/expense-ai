"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  return (
   <div
  style={{
    maxWidth: 420,
    margin: "80px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  }}
>
  <h1>Create account</h1>

  <input
    placeholder="Full name"
    style={{ width: "100%", marginTop: 16 }}
  />

  <input
    placeholder="Email or Phone"
    style={{ width: "100%", marginTop: 12 }}
  />

  <button
    style={{ width: "100%", marginTop: 16 }}
    onClick={() => router.push("/dashboard")}
  >
    Continue
  </button>

  <p style={{ marginTop: 16 }}>
    Already registered? <Link href="/auth/login">Login Here</Link>
  </p>
</div>
    
  );
}
