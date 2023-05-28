import React from "react";

import Button from "../Button";

import Toast from "../Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [textAreaValue, setTextAreaValue] = React.useState("");
  const [radioValue, setRadioValue] = React.useState("");
  const [isToastShowed, setIsToastShowed] = React.useState(false);

  function handleTextAreaChange(e) {
    setTextAreaValue(e.target.value);
  }

  function handleRadioChange(e) {
    setRadioValue(e.target.value);
  }

  console.log(isToastShowed);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastShowed && (
        <Toast
          content={textAreaValue}
          variant={radioValue}
          setIsToastShowed={setIsToastShowed}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={textAreaValue}
              onChange={handleTextAreaChange}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={radioValue === option}
                    onChange={handleRadioChange}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => setIsToastShowed(true)}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
