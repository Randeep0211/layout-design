import React from "react";
import styles from "./content.module.css";

function Content(props) {
  return (
    <>
      <div className={styles.box_container}>
        <div className={styles.box1}> </div>

        <div className={styles.box1}></div>
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <h1>content</h1>
        </div>

        <div className={styles.card}>
          <h1>content</h1>
        </div>

        <div className={styles.card}>
          <h1>content</h1>
        </div>
        <div className={styles.card}>
          <h1>content</h1>
        </div>
      </div>

      <div className={styles.table_container}>
        <div className={styles.container1}></div>
        <div className={styles.container1}></div>
        <div className={styles.container1}></div>
      </div>
    </>
  );
}

export default Content;
