import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/main";
import Comparison from "./pages/compare";

import { useQuery } from "@tanstack/react-query";

import DataTable from "./components/ui/table";
import { fetchProducts } from "./libs/api";

function App() {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", pagination],
    queryFn: () =>
      fetchProducts({
        limit: pagination.pageSize,
        skip: (pagination.current - 1) * pagination.pageSize,
      }),
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DataTable
          data={data}
          error={error}
          isLoading={isLoading}
          pagination={pagination}
          setPagination={setPagination}
        />
      ),
    },
    {
      path: "compare",
      element: <Comparison />,
    },
  ]);

  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  );
}

export default App;
