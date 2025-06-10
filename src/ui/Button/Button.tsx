import React from "react";

import cn from "classnames";

import styles from "./Button.module.css";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  typeBtn: "addTask" | "deleteTask";
}

export const Button = ({
  children,
  typeBtn,
  ...props
}: IButtonProps): React.JSX.Element => {
  return (
    <button
      {...props}
      className={cn({
        [styles.addTask]: typeBtn === "addTask",
        [styles.deleteTask]: typeBtn === "deleteTask",
      })}>
      {children}
    </button>
  );
};
