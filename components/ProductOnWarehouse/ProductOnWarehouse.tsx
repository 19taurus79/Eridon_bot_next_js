"use client";
// import { getProductOnWarehouse } from "@/lib/api";
import css from "./ProductOnWarehouse.module.css";
type Product = {
  id: string;
  product: string;
  line_of_business: string;
};
export default function ProductOnWarehouse({
  products,
}: {
  products: Product[];
}) {
  //   const products = await getProductOnWarehouse();

  return (
    <div className={css.buttonListContainer}>
      <ul className={css.buttonList}>
        {products.map((product) => (
          <li
            onClick={() => console.log(product.id)}
            className={css.buttonItem}
            key={product.id}
          >
            {product.product}
            {/* <p>{product.nomenclature_series}</p>
          <p>{product.buh}</p>
          <p>{product.skl}</p>
          <hr /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
