"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div style={{  maxWidth: 420,
    margin: "80px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",}}>
      <h1>Welcome back</h1>
    

      <input
        placeholder="Email or Phone"
        style={{ width: "100%", marginTop: 16 }}
      />

      <input
        type="password"
        placeholder="PIN"
        style={{ width: "100%", marginTop: 12 }}
      />

      <button
        style={{ width: "100%", marginTop: 16 }}
        onClick={() => router.push("/app/dashboard")}
      >
        Login
      </button>

      <button
        style={{
          width: "100%",
          marginTop: 12,
          background: "#fff",
          color: "#111",
          border: "1px solid #ddd",
        }}
      >
        Continue with Google
      </button>

      <p style={{ marginTop: 16 }}>
        First time? <Link href="/auth/register">Create account</Link>
      </p>
    </div>
  );
}
