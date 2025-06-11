"use client";
import React from "react";
import cn from "classnames";
import { Button, CheckBox } from "@/ui";
import { ITodo } from "@/interface";
import styles from "./TodoItem.module.css";
import { Icon } from "@/components";
import { deleteTodo, isDoneTodo } from "@/api/todo.api";

interface ITodoItemProps {
  todo: ITodo;
}

const removeTodo = (id: string) => {
  deleteTodo(id);
};

const isCompitedTodo = (id: string) => {
  isDoneTodo(id);
};

export const TodoItem = ({ todo }: ITodoItemProps) => {
  return (
    <article className={styles.article}>
      <CheckBox isCompitedTodo={isCompitedTodo} todo={todo} />
      <p className={cn(styles.text, { [styles.isDoneText]: todo.isDone })}>
        {todo.title}
      </p>
      <Button onClick={() => removeTodo(todo.id)} typeBtn="deleteTask">
        <Icon name="trashIcon" className={styles.trashIcon} />
      </Button>
    </article>
  );
};
