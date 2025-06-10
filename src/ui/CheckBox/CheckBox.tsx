import React from "react";
import sn from "classnames";
import styles from "./CheckBox.module.css";
import { Icon } from "@/components";
import { ITodo } from "@/interface";

interface ICheckBoxProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  todo: ITodo;
  isCompitedTodo: (id: string) => void;
}

export const CheckBox = ({
  isCompitedTodo,
  todo,
  ...props
}: ICheckBoxProps) => {
  return (
    <label
      htmlFor={todo.id}
      className={sn(styles.label, { [styles.isDone]: todo.isDone })}>
      <input
        {...props}
        onChange={() => isCompitedTodo(todo.id)}
        checked={todo.isDone}
        className={styles.input}
        id={todo.id}
        type="CheckBox"
      />
      {todo.isDone && <Icon name="arrowIcon" />}
    </label>
  );
};
