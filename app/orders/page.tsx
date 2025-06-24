// import ProductOnWarehouse from "@/components/ProductOnWarehouse/ProductOnWarehouse";
import { getClients } from "@/lib/api";
import OrdersDetail from "./Orders.detail";

const Orders = async () => {
  const clients = await getClients();
  return <OrdersDetail clients={clients} />;
};

export default Orders;
