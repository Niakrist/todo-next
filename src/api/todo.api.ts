"use server";
import { BASE_URL } from "@/constants/constants";
import { revalidatePath } from "next/cache";
import { ITodo } from "@/interface";

export const getAllTodo = async (): Promise<ITodo[] | null> => {
  try {
    const response = await fetch(BASE_URL, { next: { revalidate: 10 } });

    if (!response.ok) {
      throw new Error(
        `Не удалось получить данные: ${response.status} ${response.statusText}`
      );
    }
    const data: ITodo[] = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return null;
  }
};

export const createTodo = async (
  todo: Partial<ITodo>
): Promise<ITodo | null> => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error(
        `Не удалось добавить запись: ${response.status} ${response.statusText}`
      );
    }
    revalidatePath("/"); // Обновляем кэш
    const data = await response.json();

    console.log("data: ", data);
    return data;
  } catch (error) {
    console.error("Ошибка при создании данных:", error);
    return null;
  }
};

export const isDoneTodo = async (id: string): Promise<ITodo | null> => {
  try {
    const response = await fetch(BASE_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      `Не удалось обновить запись: ${response.status} ${response.statusText}`;
    }
    revalidatePath("/"); // Обновляем кэш
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при обновлении данных:", error);
    return null;
  }
};

export const deleteTodo = async (id: string): Promise<ITodo | null> => {
  try {
    const response = await fetch(BASE_URL + "/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      `Не удалось удалить запись: ${response.status} ${response.statusText}`;
    }

    revalidatePath("/"); // Обновляем кэш
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при удалении данных:", error);
    return null;
  }
};
