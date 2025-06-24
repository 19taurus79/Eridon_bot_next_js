// "use client";

import ListBtn from "@/components/ListBtn/ListBtn";

// import ProductOnWarehouse from "@/components/ProductOnWarehouse/ProductOnWarehouse";
// import { getProductOnWarehouse, getRemains } from "@/lib/api";
// import { Remains } from "@/types/remains";
// import { useQuery } from "@tanstack/react-query";

// export default function ClientComponent() {
//   const {
//     data: products,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["products_on_warehouse"],
//     queryFn: () => getProductOnWarehouse(),
//     staleTime: 1000 * 60 * 60 * 24, // 24 ч
//     gcTime: 1000 * 60 * 60 * 48, // 48 ч
//   });

//   if (isLoading) return <p>Завантаження...</p>;
//   if (error) return <p>Помилка: {(error as Error).message}</p>;

//   return (
//     // <ul>
//     //   {products.map((remain: Remains) => (
//     //     <li key={remain.id}>
//     //       {remain.product}
//     //       {/* <p>{remain.nomenclature_series}</p>
//     //       <p>{remain.buh}</p>
//     //       <p>{remain.skl}</p> */}
//     //       <hr />
//     //     </li>
//     //   ))}
//     // </ul>
//     <ProductOnWarehouse products={products} />
//   );
// }
type Product = {
  id: string;
  product: string;
  line_of_business: string;
};
const RemainsDetail = ({ products }: { products: Product[] }) => {
  return <ListBtn list={products} getLabel={(item) => item.product} />;
};
export default RemainsDetail;
