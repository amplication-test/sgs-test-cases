import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  kal?: SortOrder;
  addressId?: SortOrder;
  pack?: SortOrder;
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
};
