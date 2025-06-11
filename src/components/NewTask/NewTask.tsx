import React from "react";
import { Button } from "@/ui";
import { Icon } from "@/components";
import { createTodoFormAction } from "@/api/todo.action";
import styles from "./NewTask.module.css";

export const NewTask = () => {
  return (
    <form action={createTodoFormAction} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="title"
        id="newTask"
        placeholder="Добавить новую задачу"
      />
      <Button type="submit" typeBtn="addTask">
        Создать <Icon name="plusIcon" />
      </Button>
    </form>
  );
};
