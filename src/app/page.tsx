import Link from "next/link";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Manajemen Tim", href: "/manajemen-tim" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-slate-800 bg-slate-900 p-6 md:flex">
        <div className="mb-8 flex items-center gap-2 text-lg font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-sky-500 text-sm font-bold text-white">
            D
          </span>
          Dashboard
        </div>

        <nav aria-label="Menu utama">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current="page"
              className="flex items-center gap-3 rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path d="M3 10.5 12 3l9 7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 9.5V21h13V9.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.5 21v-6h5v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 shrink-0 items-center border-b border-slate-800 px-6">
          <div className="flex items-center gap-3 md:hidden">
            <span className="font-semibold">Dashboard</span>
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current="page"
                className="rounded-md bg-slate-800 px-3 py-1.5 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <h1 className="hidden text-sm font-medium text-slate-300 md:block">
            Beranda
          </h1>
        </header>

        <main className="flex-1" aria-label="Konten Beranda" />
      </div>
    </div>
  );
}

