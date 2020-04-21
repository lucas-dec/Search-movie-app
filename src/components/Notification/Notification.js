import React from "react";
import styles from "./Notification.module.scss";
import { staticData } from "../../staticData";

const Notification = ({ message, typeAction }) => {
  const { actionType } = staticData;
  let addClass, removeClass;
  if (typeAction === actionType.ADD) {
    addClass = [styles.notification, styles.add].join(" ");
  } else {
    removeClass = [styles.notification, styles.remove].join(" ");
  }

  return (
    <>
      {typeAction === actionType.ADD && <h5 className={addClass}>{message}</h5>}
      {typeAction === actionType.REMOVE && <h5 className={removeClass}>{message}</h5>}
    </>
  );
};

export default Notification;
