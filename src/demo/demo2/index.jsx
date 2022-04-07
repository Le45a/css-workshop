import React from "react";
import styles from "./index.module.css";

const Demo2 = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}></div>
        <p>
          Pea horseradish azuki bean lettuce avocado asparagus okra. Kohlrabi
          radish
        </p>
        <p>
          Grape silver beet collard greens avocado quandong fennel gumbo
          black-eyed pea watercress potato tigernut corn groundnut. Chickweed
          okra pea winter purslane coriander yarrow sweet pepper radish garlic
          brussels sprout groundnut summer purslane earthnut pea tomato spring
          onion azuki bean gourd. Gumbo kakadu plum komatsuna black-eyed pea
          green bean zucchini gourd winter purslane silver beet rock melon
          radish asparagus spinach.
        </p>
      </div>
      <div>
        问题：
        <p>1.如果只给第一个p背景色，方块的表现是什么样子的？</p>
        <p>2.如何文字的高度没有方块高，表现会如何？如何解决？</p>
      </div>
    </>
  );
};

export default Demo2;
