export default function Topbar() {
  return (
    <header
      style={{
        height: 60,
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <span>Welcome 👋</span>
      <div>👤</div>
    </header>
  );
}
