import React from "react";
import styles from "./index.module.css";
import expect from "./img/expected.png";

const CSSSelector = () => {
  return (
    <>
      <div className={styles.question}>
        question:请将选择器填入对应的样式中，完成下图效果：
        <img
          style={{ display: "block", margin: "20px" }}
          width={1200}
          src={expect}
          alt=''
        />
        <p>
          可用选择器：.container ,.container{`>`}p::after,.content
          p:last-child,#title ,.content
          p:nth-child(2),strong,p[data-link],p[data-link]:hover{" "}
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <p id={styles.title}>title</p>
          <p>subtext</p>
          <p>
            Grape silver beet collard greens avocado quandong fennel gumbo
            black-eyedpea
          </p>
          <p>watercress</p>
          <p>
            <strong>
              potato tigernut corn groundnut. Chickweed okra pea winter purslane
              coriander yarrow sweet pepper radish garlic brussels sprout
              groundnut
            </strong>
          </p>
          <p data-link>summer purslane earthnut</p>
          <p>
            pea tomato spring onion azuki bean gourd. Gumbo kakadu plum
            komatsuna black-eyed pea green bean zucchini gourd winter purslane
            silver beet rock melon radish asparagus spinach.
          </p>
        </div>
        <p>by xxx</p>
      </div>
    </>
  );
};
export default CSSSelector;
