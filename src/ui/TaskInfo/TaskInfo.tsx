import React from "react";
import cn from "classnames";

import styles from "./TaskInfo.module.css";

interface ITaskInfoProps {
  color: "blue" | "purple";
  children: React.ReactNode;
  allTask: number;
  doneTask?: number;
}

export const TaskInfo = ({
  color,
  children,
  allTask,
  doneTask,
}: ITaskInfoProps) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={cn(styles.name, {
          [styles.blue]: color === "blue",
          [styles.purple]: color === "purple",
        })}>
        {children}
      </p>{" "}
      <p className={styles.quantity}>
        {doneTask ? doneTask + " из " + allTask : allTask}
      </p>
    </div>
  );
};
