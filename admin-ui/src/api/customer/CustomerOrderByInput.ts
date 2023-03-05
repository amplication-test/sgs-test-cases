import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  pack?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
