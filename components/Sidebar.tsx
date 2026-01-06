import Link from "next/link";

export default function Sidebar() {
  return (
    <aside style={{ width: 220, background: "#111", color: "#fff", padding: 20 }}>
      <h2>Expense AI</h2>
      <nav style={{ marginTop: 20 }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/expenses/add">Add Expense</Link></li>
          <li><Link href="/expenses/history">History</Link></li>
          <li><Link href="/chat">Chat</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
