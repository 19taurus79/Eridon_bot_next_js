import ListBtn from "@/components/ListBtn/ListBtn";
import { Client } from "@/types/Client";

const OrdersDetail = ({ clients }: { clients: Client[] }) => {
  return (
    <ListBtn list={clients} getLabel={(client: Client) => client.client} />
  );
};

export default OrdersDetail;
