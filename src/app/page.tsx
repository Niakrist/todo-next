import { getAllTodo } from "@/api/todo.api";
import { NewTask, TasksInfoWrapper, TodoList } from "@/components";

import styles from "./Todo.module.css";

export default async function Home() {
  const todos = await getAllTodo();

  if (!todos) return <div>Загрузка...</div>;

  const allTask = todos?.length;
  const doneTask = todos.filter((todo) => todo.isDone === true).length;

  return (
    <section className={styles.container}>
      <NewTask />
      <TasksInfoWrapper allTask={allTask} doneTask={doneTask} />
      <TodoList todos={todos} />
    </section>
  );
}
