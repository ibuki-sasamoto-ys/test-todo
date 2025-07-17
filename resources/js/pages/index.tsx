import { useEffect } from "react";
import styles from "./style.module.css";
import { useTodos } from "../hooks/useTodos";
import { List } from "../features/List";
import { Form } from "../features/Form";

const TodoApp = () => {
    const { todos, error, fetchTodos, addTodo, updateTodo, deleteTodo } =
        useTodos();

    useEffect(() => {
        fetchTodos();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteTodo(id);
    };

    const handleToggle = async (id: number) => {
        const target = todos.find((todo) => todo.id === id);
        if (!target) return;
        const updatedTodo = {
            ...target,
            complete_status: !target.complete_status,
        };
        await updateTodo(id, updatedTodo);
    };

    return (
        <div className={styles.appWrapper}>
            <h1>今日やること</h1>
            <Form addTodo={addTodo} />
            {error && <p className={styles.errorMessage}>{error}</p>}
            <List
                todos={todos}
                onDelete={handleDelete}
                onToggle={handleToggle}
            />
        </div>
    );
};

export default TodoApp;
