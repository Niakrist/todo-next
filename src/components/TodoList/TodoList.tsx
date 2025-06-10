import { ITodo } from "@/interface";
import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

interface ITodoListProps {
  todos: ITodo[] | null;
}

export const TodoList = ({ todos }: ITodoListProps): React.JSX.Element => {
  if (!todos) return <div>Загрузка...</div>;
  return (
    <ul>
      {todos.map((todo) => (
        <li className={styles.item} key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};
