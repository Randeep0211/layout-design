import React from "react";
import styles from "./sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      {/* <h1 className={styles.profile}>Sidebar</h1> */}
      <img
        classname={styles.profile}
        src={"/profile2.png"}
        alt="image"
        height={100}
        width={100}
      />
      <div className={styles.box_container}>
        <div className={styles.bar}>
          <h6></h6>
        </div>
        <div className={styles.bar}>
          <h6></h6>
        </div>
        <div className={styles.bar}>
          <h6></h6>
        </div>
        <div className={styles.bar}>
          <h6></h6>
        </div>
        <div className={styles.bar}>
          <h6></h6>
        </div>
        <div className={styles.bar}>
          <h6></h6>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
