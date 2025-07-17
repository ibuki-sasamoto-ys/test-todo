import { useState } from "react";
import { type TodoType } from "../types/types";

const API_URL = "/api/v1/todos";

const getHeaders = () => ({
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "X-CSRF-TOKEN":
        (document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement)
            ?.content || "",
});

export const useTodos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchTodos = async () => {
        try {
            const res = await fetch(API_URL);
            if (!res.ok) throw new Error(`HTTP status: ${res.status}`);
            const data = await res.json();
            setTodos(data);
            setError(null);
        } catch (error) {
            console.error(error);
            setError(
                "ToDoの取得に失敗しました。時間をおいて再試行してください。"
            );
        }
    };

    const addTodo = async (inputValue: string) => {
        const newTodo = {
            // id: crypto.randomUUID(), //idは、Laravel側でオートインクリメント（number型）で作成
            text: inputValue,
            complete_status: false,
        };
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: getHeaders(),
                body: JSON.stringify(newTodo),
            });
            if (!res.ok) {
                const errorBody = await res.json();
                throw new Error(errorBody.message || "追加に失敗しました。");
            }
            await fetchTodos();
            setError(null);
        } catch (error: any) {
            console.error(error);
            setError(
                error?.message ||
                    "ToDoの追加に失敗しました。もう一度お試しください。"
            );
        }
    };

    const updateTodo = async (id: number, updated: TodoType) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: getHeaders(),
                body: JSON.stringify(updated),
            });
            if (!res.ok) {
                const errorBody = await res.json();
                throw new Error(errorBody.message || "更新に失敗しました。");
            }
            await fetchTodos();
            setError(null);
        } catch (error: any) {
            console.error(error);
            setError(
                error?.message ||
                    "ToDoの更新に失敗しました。もう一度お試しください。"
            );
        }
    };

    const deleteTodo = async (id: number) => {
        try {
            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
                headers: getHeaders(),
            });
            if (!res.ok) {
                const errorBody = await res.json();
                throw new Error(errorBody.message || "削除に失敗しました。");
            }
            await fetchTodos();
            setError(null);
        } catch (error: any) {
            console.error(error);
            setError(
                error?.message ||
                    "ToDoの削除に失敗しました。もう一度お試しください。"
            );
        }
    };

    return { todos, error, fetchTodos, addTodo, updateTodo, deleteTodo };
};
