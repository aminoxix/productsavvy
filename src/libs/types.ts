export interface IProduct {
  id: React.Key;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export type DataTableProps = {
  data: { products: IProduct[]; total: number };
  error?: Error | null;
  isLoading?: boolean;
  pagination?: { current: number; pageSize: number };
  setPagination?: (pagination: { current: number; pageSize: number }) => void;
};
