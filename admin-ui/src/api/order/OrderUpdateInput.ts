import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  customer?: CustomerWhereUniqueInput | null;
};
