import type { TodoType } from "../../types/types";
import styles from "./style.module.css";
import { Button } from "../../components/Button";

type Props = {
    todos: TodoType[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
};

export const List = ({ todos, onDelete, onToggle }: Props) => {
    return (
        <ul className={styles.list}>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.item}>
                    <p
                        className={
                            todo.complete_status ? `${styles.completed}` : ""
                        }
                    >
                        {todo.text}
                    </p>
                    <div className={styles.buttonWrapper}>
                        <Button
                            label="削除"
                            handleClick={() => onDelete(todo.id)}
                            aria-label="ToDoを削除"
                        />
                        <Button
                            label={todo.complete_status ? "戻す" : "完了"}
                            handleClick={() => onToggle(todo.id)}
                            aria-label="ToDoを削除"
                        />
                    </div>
                </li>
            ))}
        </ul>
    );
};
