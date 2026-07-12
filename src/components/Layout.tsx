import Sidebar from "./Sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-screen bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}
