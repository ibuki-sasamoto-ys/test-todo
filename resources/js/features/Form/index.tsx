import { ChangeEvent, useState } from "react";
import styles from "./style.module.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

type Props = {
    addTodo: (value: string) => Promise<void>;
};

export const Form = ({ addTodo }: Props) => {
    const [value, setValue] = useState("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAdd = async () => {
        if (value.trim().length === 0) return;
        await addTodo(value);
        setValue("");
    };

    return (
        <div className={styles.inputWrapper}>
            <Input
                inputValue={value}
                handleChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleAdd();
                }}
            />
            <Button
                label="追加"
                aria-label="ToDoリストに追加"
                handleClick={handleAdd}
                disabled={!value}
            />
        </div>
    );
};
