import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { CloseCircleOutlined, PlusCircleFilled } from "@ant-design/icons";
import { Badge, Button, Card, Modal, Tooltip } from "antd";
import Meta from "antd/es/card/Meta";

import DataTable from "../components/ui/table";

import { fetchProducts } from "../libs/api";
import { useModalStore, useProductStore } from "../libs/store";

const Comparison = () => {
  const { open, setOpen } = useModalStore();
  const { data, removeProduct } = useProductStore();

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const {
    error,
    isLoading,
    data: tableData,
  } = useQuery({
    queryKey: ["products", pagination],
    queryFn: () =>
      fetchProducts({
        limit: pagination.pageSize,
        skip: (pagination.current - 1) * pagination.pageSize,
      }),
  });

  return (
    <>
      <Modal
        centered
        width={800}
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <DataTable
          data={tableData}
          error={error}
          isLoading={isLoading}
          pagination={pagination}
          setPagination={setPagination}
        />
      </Modal>

      <div className="overflow-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.products.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt={item.title} src={item.thumbnail} />}
          >
            <p className="pb-2">{item.brand}</p>
            <Meta title={item.title} description={item.description} />

            <p className="pt-5">Price ${item.price}</p>
            <p>Discount {item.discountPercentage}%</p>

            <div className="flex justify-between items-center">
              <Badge
                count={item.category}
                style={{
                  backgroundColor: "#000",
                }}
              />
              <Tooltip title="delete" className="absolute bottom-0 left-0">
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <CloseCircleOutlined
                      onClick={() => removeProduct(item.id)}
                    />
                  }
                  className="!bg-red-500 !border-red-500"
                />
              </Tooltip>
            </div>
          </Card>
        ))}
        {data.products.length < 4 && (
          <Card
            className="flex justify-center items-center"
            style={{
              width: 240,
              height: 572.09,
              backgroundColor: "transparent",
              border: "2px dashed #d9d9d9",
            }}
            onClick={() => setOpen(true)}
          >
            <div className="flex flex-col gap-2 items-center">
              <PlusCircleFilled style={{ fontSize: "50px", color: "#fff" }} />
              <span className="font-bold text-white">Add More</span>
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default Comparison;
