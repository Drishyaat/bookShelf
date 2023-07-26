import React from "react";
import { Link } from "react-router-dom";
import { mys, fic, nonFic, rom } from "../../../../Assets/images";
import { useFilter } from "../../../../Context";
import styles from "./Categories.module.css";

const Categories = () => {
  const { filterDispatch } = useFilter();

  const filterFromHome = (category) => {
    filterDispatch({ type: "CLEAR" });
    filterDispatch({ type: "CATEGORY_FILTER", payload: { type: category } });
  };

  return (
    <div className={styles.categoryList}>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Mystery")}
      >
        <img src={mys} alt="Hero Image" />
        <span> Mystery </span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Fiction")}
      >
        <img src={fic} alt="Hero Image" />
        <span>Fiction</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("NonFiction")}
      >
        <img src={nonFic} alt="Hero Image" />
        <span>Non-Fiction</span>
      </Link>
      <Link
        to="/products"
        className={styles.categoryItem}
        onClick={() => filterFromHome("Romance")}
      >
        <img src={rom} alt="Hero Image" />
        <span>Romance</span>
      </Link>
    </div>
  );
};

export { Categories };
