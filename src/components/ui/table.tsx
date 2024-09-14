import { useNavigate } from "react-router-dom";

import type { TableColumnsType, TableProps } from "antd";
import { Button, Table } from "antd";

import { useModalStore, useProductStore } from "../../libs/store";
import { DataTableProps, IProduct } from "../../libs/types";

const DataTable = ({
  data,
  error,
  isLoading,
  pagination,
  setPagination,
}: DataTableProps) => {
  const navigate = useNavigate();

  const { setOpen } = useModalStore();
  const { data: storeData, addProduct: setProducts } = useProductStore();

  const columns: TableColumnsType<IProduct> = [
    {
      title: "Title",
      dataIndex: "title",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.title.length - b.title.length,
      sortDirections: ["descend"],
    },
    {
      title: "Description",
      dataIndex: "description",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.description.length - b.description.length,
      sortDirections: ["descend"],
    },
    {
      title: "Price ($)",
      dataIndex: "price",
      showSorterTooltip: { target: "full-header" },
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.brand.length - b.brand.length,
    },
    {
      title: "Category",
      dataIndex: "category",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "Image",
      dataIndex: "thumbnail",
      showSorterTooltip: { target: "full-header" },
      sorter: (a, b) => a.thumbnail.length - b.thumbnail.length,
      render: (_, record) => <img src={record.thumbnail} alt={record.title} />,
    },
    {
      title: "Compare",
      dataIndex: "compare",
      render: (_, record) => (
        <Button
          key={record.id}
          disabled={
            storeData.products.length >= 4 ||
            storeData.products.some((item) => item.id === record.id)
          }
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            setProducts([...storeData.products, record]);
            navigate("/compare");
          }}
        >
          Compare
        </Button>
      ),
    },
  ];

  const onChange: TableProps<IProduct>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  if (error) {
    return <div>Error: ${error.message}</div>;
  }

  return (
    <div className="overflow-x-scroll bg-white">
      <Table
        columns={columns}
        loading={isLoading}
        onChange={onChange}
        dataSource={data?.products}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={{
          current: pagination?.current,
          pageSize: pagination?.pageSize,
          total: data?.total,
          showSizeChanger: true,
          onChange: (page, pageSize) => {
            setPagination?.({ current: page, pageSize });
          },
        }}
      />
    </div>
  );
};

export default DataTable;
