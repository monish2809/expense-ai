"use client";

import { useState } from "react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      {/* Topbar */}
      <header
        style={{
          height: 56,
          background: "#ff7a18",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 16px",
        }}
      >
        {/* Hamburger / 3 dots */}
        <span
          onClick={() => setOpen(!open)}
          style={{
            fontSize: 22,
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          ☰
        </span>

        <span style={{ fontWeight: 600 }}>Expense AI</span>
      </header>

      <div style={{ display: "flex", height: "calc(100vh - 56px)" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 260,
            background: "#ff7a18",
            color: "#fff",
            transform: open ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.25s ease",
            padding: 16,
            flexShrink: 0,
          }}
        >
          <h3 style={{ marginBottom: 20 }}>Menu</h3>

          <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <SidebarItem label="Dashboard" />
            <SidebarItem label="Add Expense" />
            <SidebarItem label="History" />
            <SidebarItem label="Chat" />
          </nav>
        </aside>

        {/* Main content */}
        <main
          style={{
            flex: 1,
            background: "#fafafa",
            padding: 20,
            overflowY: "auto",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

/* Inline helper (still layout-only, not a component file) */
function SidebarItem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 6,
        cursor: "pointer",
        background: "rgba(255,255,255,0.15)",
      }}
    >
      {label}
    </div>
  );
}
