import todoApi from "@/api/todo.api";
import { NewTask, TasksInfoWrapper, TodoList } from "@/components";

import styles from "./Todo.module.css";

export default async function Home() {
  const todos = await todoApi.getAll();

  return (
    <section className={styles.container}>
      <NewTask />
      <TasksInfoWrapper />
      <TodoList todos={todos} />
    </section>
  );
}
