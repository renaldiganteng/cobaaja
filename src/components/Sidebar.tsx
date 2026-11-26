"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Manajemen Tim", href: "/manajemen-tim" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Menu utama">
      {menu.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white"
                : "rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white"
            }
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}