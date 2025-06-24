// import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
// import getQueryClient from "@/lib/getQueryClient";
// import { getProductOnWarehouse, getRemains } from "@/lib/api";
// import ClientComponent from "./Remains.client";

import { getProductOnWarehouse } from "@/lib/api";
import RemainsDetail from "./Remains.detail.client";

// export default async function Page() {
//   const queryClient = getQueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["products_on_warehouse"],
//     queryFn: () => getProductOnWarehouse(),
//     staleTime: 1000 * 60 * 60 * 24, // 24 ч
//     gcTime: 1000 * 60 * 60 * 48, // 48 ч
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <ClientComponent />
//     </HydrationBoundary>
//   );
// }
const Remains = async () => {
  const products = await getProductOnWarehouse();
  return <RemainsDetail products={products} />;
};
export default Remains;
