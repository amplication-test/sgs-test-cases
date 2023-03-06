import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  productId?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  quantity?: SortOrder;
  discount?: SortOrder;
  totalPrice?: SortOrder;
  customerId?: SortOrder;
};
