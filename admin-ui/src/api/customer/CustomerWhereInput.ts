import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  kal?: StringNullableFilter;
  address?: AddressWhereUniqueInput;
  pack?: StringNullableFilter;
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phone?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
