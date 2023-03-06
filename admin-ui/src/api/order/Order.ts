import { Product } from "../product/Product";
import { Customer } from "../customer/Customer";

export type Order = {
  product?: Product | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  quantity: number | null;
  discount: number | null;
  totalPrice: number | null;
  customer?: Customer | null;
};
