import { TaskInfo } from "@/ui";
import React from "react";

import styles from "./TasksInfoWrapper.module.css";

export const TasksInfoWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <TaskInfo allTask={5} color="blue">
        Созданные задачи
      </TaskInfo>
      <TaskInfo allTask={5} doneTask={2} color="purple">
        Завершено
      </TaskInfo>
    </div>
  );
};
