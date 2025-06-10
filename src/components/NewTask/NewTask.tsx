"use client";
import todoApi from "@/api/todo.api";
import { ITodo } from "@/interface";
import { Button } from "@/ui";
import React, { useState } from "react";
import { Icon } from "../Icon/Icon";

import styles from "./NewTask.module.css";

export const NewTask = () => {
  const [todo, setTodo] = useState({ title: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => ({ ...prev, title: e.target.value }));
  };

  const addTask = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    todo: Partial<ITodo>
  ) => {
    e.preventDefault();
    todoApi.create(todo);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        value={todo.title}
        onChange={onChange}
        type="text"
        id="newTask"
        placeholder="Добавить новую задачу"
      />
      <Button onClick={(e) => addTask(e, todo)} typeBtn="addTask">
        Создать <Icon name="plusIcon" />
      </Button>
    </form>
  );
};
