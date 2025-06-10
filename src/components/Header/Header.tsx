import React from "react";
import { Icon } from "@/components";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Icon name="logoIcon" />
      </div>
    </header>
  );
};
