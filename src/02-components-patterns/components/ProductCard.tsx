import styles from "../styles/styles.module.css";
import { createContext } from "react";
import useProduct from "../hooks/useProduct";
import {
  ProductContextProps,
  productCardProps,
} from "../interfaces/Product.Interface";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: productCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
