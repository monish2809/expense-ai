"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div style={styles.page}>
      {/* LEFT PANEL — FORM */}
      <div style={styles.left}>
        <h1 style={styles.title}>Create account</h1>
        <p style={styles.subtitle}>
          Start managing your finance faster and better
        </p>

        <input
          placeholder="Full name"
          style={styles.input}
        />

        <input
          placeholder="Email or Phone"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Create PIN"
          style={styles.input}
        />

        <button
          style={styles.primaryBtn}
          onClick={() => router.push("/app/dashboard")}
        >
          Continue
        </button>

        <p style={styles.bottomText}>
          Already registered?{" "}
          <Link href="/auth/login" style={styles.link}>
            Login here
          </Link>
        </p>
      </div>

      {/* RIGHT PANEL — VISUAL */}
      <div style={styles.right}>
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

        <h2 style={styles.welcome}>Welcome!</h2>
        <p style={styles.subtitle}>
          Create your account and take control of your expenses
        </p>
      </div>
    </div>
  );
}

/* ---------------- THEME ---------------- */

const ORANGE = "#ff7a18";
const BLACK = "#0b0b0b";

/* ---------------- STYLES ---------------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Inter, sans-serif",
    background: "#fff",
  },

  /* LEFT FORM */
  left: {
    flex: 1,
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 520,
  },

  title: {
    color: BLACK,
    marginBottom: 8,
  },

  subtitle: {
    color: "#666",
    marginBottom: 24,
    maxWidth: 360,
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid #ddd",
    marginBottom: 14,
    fontSize: 14,
  },

  primaryBtn: {
    marginTop: 10,
    padding: 14,
    borderRadius: 12,
    border: "none",
    background: ORANGE,
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer",
  },

  bottomText: {
    marginTop: 20,
    fontSize: 14,
  },

  link: {
    color: ORANGE,
    fontWeight: 600,
  },

  /* RIGHT VISUAL */
  right: {
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
};
