import React, { ChangeEvent } from "react";
import styles from "./style.module.css";

type CommonInputProps = React.ComponentProps<"input">;

interface InputProps extends CommonInputProps {
    inputValue: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ inputValue, handleChange }: InputProps) => {
    return (
        <input
            name="todo"
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={handleChange}
        />
    );
};
