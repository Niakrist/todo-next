import { BASE_URL } from "@/constants/constants";
import { ITodo } from "@/interface";

class TodoApi {
  async getAll(): Promise<ITodo[] | null> {
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
  }

  async create(todo: Partial<ITodo>) {
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
        next: { revalidate: 10 },
      });

      if (!response.ok) {
        throw new Error(
          `Не удалось добавить запись: ${response.status} ${response.statusText}`
        );
      }
      const data = await response.json();

      console.log("data: ", data);
      return data;
    } catch (error) {
      console.error("Ошибка при создании данных:", error);
    }
  }

  async delete(id: string) {
    try {
      const response = await fetch(BASE_URL + "/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      });

      if (!response.ok) {
        throw new Error(
          `Не удалось удалиьт запись: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("delete data");
      return data;
    } catch (error) {
      console.error("Ошибка при удалении данных:", error);
    }
  }

  async patch(id: string) {
    try {
      const response = await fetch(BASE_URL + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      });

      if (!response.ok) {
        `Не удалось обновить запись: ${response.status} ${response.statusText}`;
      }
      const data = await response.json();
      console.log("data:", data);
      return data;
    } catch (error) {
      console.error("Ошибка при обновлении данных:", error);
    }
  }
}

export default new TodoApi();
