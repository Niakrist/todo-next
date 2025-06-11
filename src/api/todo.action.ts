"use server";

import { createTodo } from "./todo.api";

export async function createTodoFormAction(formData: FormData) {
  const title = formData.get("title")?.toString();
  if (!title) throw new Error("Title is required");
  await createTodo({ title });
}
