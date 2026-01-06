"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  return (
    <div style={styles.page}>
      {/* LEFT PANEL */}
      <div style={styles.left}>
        <div style={styles.logo}>FINOTIC</div>

        <div style={styles.cardStack}>
          <div style={styles.balanceCard}>
            <p style={styles.cardLabel}>CURRENT BALANCE</p>
            <h2 style={styles.balance}>₹24,359</h2>
          </div>

          <div style={styles.chartCard}>
            <div style={styles.chart}>
              <span style={styles.chartText}>34%</span>
            </div>
            <p style={styles.cardLabel}>Food</p>
          </div>

          <div style={styles.uploadCard}>
            <div style={styles.plus}>+</div>
            <p style={styles.cardLabel}>New transaction</p>
            <small>or upload .xls file</small>
          </div>
        </div>

        <h2 style={styles.welcome}>Welcome back!</h2>
        <p style={styles.subtitle}>
          Start managing your finance faster and better
        </p>
      </div>

      {/* RIGHT PANEL */}
      <div style={styles.right}>
        <h1 style={styles.title}>Welcome back!</h1>
        <p style={styles.subtitle}>
          Start managing your finance faster and better
        </p>

        <input
          placeholder="you@example.com"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="At least 8 characters"
          style={styles.input}
        />

        <div style={styles.forgot}>Forgot password?</div>

        <button
          style={styles.loginBtn}
          onClick={() => router.push("/app/dashboard")}
        >
          Login
        </button>

        <div style={styles.divider}>or</div>

        <div style={styles.socials}>
          <button style={styles.socialBtn}>Google</button>
          <button style={styles.socialBtn}>Facebook</button>
        </div>

        <p style={styles.bottomText}>
          Don’t you have an account?{" "}
          <Link href="/auth/register" style={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const ORANGE = "#ff7a18";
const BLACK = "#0b0b0b";

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  /* LEFT */
  left: {
    flex: 1,
    background: "#f9fafb",
    padding: "60px",
    position: "relative",
  },

  logo: {
    fontWeight: 800,
    letterSpacing: 1,
    color: ORANGE,
  },

  cardStack: {
    position: "relative",
    marginTop: 80,
    height: 260,
  },

  balanceCard: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  chartCard: {
    position: "absolute",
    top: 60,
    left: 180,
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },

  uploadCard: {
    position: "absolute",
    top: 150,
    left: 40,
    background: "#fff",
    padding: 20,
    borderRadius: 14,
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    width: 160,
  },

  plus: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: ORANGE,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 8px",
    fontSize: 22,
  },

  chart: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    border: `8px solid ${ORANGE}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  chartText: {
    fontWeight: 700,
    color: BLACK,
  },

  cardLabel: {
    fontSize: 12,
    color: "#777",
  },

  balance: {
    margin: 0,
    color: BLACK,
  },

  welcome: {
    marginTop: 180,
    color: BLACK,
  },

  subtitle: {
    color: "#666",
    maxWidth: 360,
  },

  /* RIGHT */
  right: {
    flex: 1,
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 520,
    margin: "0 auto",
  },

  title: {
    marginBottom: 8,
    color: BLACK,
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid #ddd",
    marginTop: 16,
    fontSize: 14,
  },

  forgot: {
    textAlign: "right",
    fontSize: 12,
    marginTop: 8,
    color: ORANGE,
    cursor: "pointer",
  },

  loginBtn: {
    marginTop: 20,
    padding: 14,
    borderRadius: 12,
    border: "none",
    background: ORANGE,
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },

  divider: {
    textAlign: "center",
    margin: "24px 0",
    color: "#999",
  },

  socials: {
    display: "flex",
    gap: 12,
  },

  socialBtn: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    background: "#fff",
    cursor: "pointer",
  },

  bottomText: {
    marginTop: 24,
    fontSize: 14,
    textAlign: "center",
  },

  link: {
    color: ORANGE,
    fontWeight: 600,
  },
};
