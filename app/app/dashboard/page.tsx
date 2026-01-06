export default function DashboardPage() {
  const stats = [
    { label: "Last 7 Days", value: "₹3,200" },
    { label: "Last 30 Days", value: "₹14,500" },
    { label: "Last 90 Days", value: "₹48,200" },
  ];

  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: 20,
              border: "1px solid #ddd",
              borderRadius: 8,
              width: 200,
            }}
          >
            <p>{s.label}</p>
            <h2>{s.value}</h2>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40 }}>
        <h3>Spending Warning</h3>
        <div style={{ height: 10, background: "#eee", borderRadius: 5 }}>
          <div style={{ width: "60%", height: "100%", background: "orange" }} />
        </div>
      </div>
    </div>
  );
}
