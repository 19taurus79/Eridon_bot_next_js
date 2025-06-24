import ListBtn from "@/components/ListBtn/ListBtn";
type Client = {
  client: string;
  id: string;
};
const OrdersDetail = ({ clients }: { clients: Client[] }) => {
  return <ListBtn list={clients} getLabel={(client) => client.client} />;
};

export default OrdersDetail;
