import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">ZAIRA</h1>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link href="/dashboard" className="p-2 rounded hover:bg-gray-100">
          Dashboard
        </Link>

        <Link href="/products" className="p-2 rounded hover:bg-gray-100">
          Products
        </Link>

        <Link href="/inventory" className="p-2 rounded hover:bg-gray-100">
          Inventory
        </Link>

        <Link href="/sales" className="p-2 rounded hover:bg-gray-100">
          Sales
        </Link>

        <Link href="/accounting" className="p-2 rounded hover:bg-gray-100">
          Accounting
        </Link>
      </nav>
    </aside>
  );
}
