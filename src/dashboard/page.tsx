import Layout from "@/components/Layout";

export default function DashboardPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            商品数
          </h2>
          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            在庫数
          </h2>
          <p className="text-3xl font-bold">
            0
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            売上
          </h2>
          <p className="text-3xl font-bold">
            ¥0
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-sm text-gray-500">
            利益
          </h2>
          <p className="text-3xl font-bold">
            ¥0
          </p>
        </div>
      </div>
    </Layout>
  );
}
