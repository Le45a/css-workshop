import React from "react";
import styles from "./index.module.css";
import domImg from "./img/dom.png";
import styleImg from "./img/style.png";

const CSSSelector = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p>子元素选择器只会选中container下的直接子元素，而不会选中孙子元素</p>
          <p>:not(select)伪类选中除了select选择器的其他符合条件的元素</p>
          <p>
            <img width={400} src={domImg} />
          </p>
          <img width={400} src={styleImg} />
        </div>
        <p>这是container的直接子元素</p>
        <div className={styles.content}>
          <p id={styles.title}>这是id为title的孙子元素</p>
          <p>这是container的孙子元素</p>
          <p>这是container的孙子元素</p>
        </div>
      </div>   
    </>
  );
};
export default CSSSelector;
