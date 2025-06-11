import { TaskInfo } from "@/ui";
import React from "react";

import styles from "./TasksInfoWrapper.module.css";

interface ITasksInfoWrapperProps {
  allTask: number;
  doneTask?: number;
}

export const TasksInfoWrapper = ({
  allTask,
  doneTask,
}: ITasksInfoWrapperProps): React.JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <TaskInfo allTask={allTask} color="blue">
        Созданные задачи
      </TaskInfo>
      <TaskInfo allTask={allTask} doneTask={doneTask} color="purple">
        Завершено
      </TaskInfo>
    </div>
  );
};
