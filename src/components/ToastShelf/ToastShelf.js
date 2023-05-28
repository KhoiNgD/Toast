import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastList }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.map(({ variant, content, id }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant}>{content}</Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
