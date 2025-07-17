import React from "react";
import styles from "./style.module.css";

type CommonButtonProps = React.ComponentProps<"button">;

interface ButtonProps extends CommonButtonProps {
    label: "追加" | "削除" | "完了" | "戻す";
    handleClick: () => void;
}

export const Button = ({ label, handleClick }: ButtonProps) => {
    const buttonStyle = (() => {
        if (label === "追加") {
            return `${styles.button} ${styles.add}`;
        } else if (label === "削除") {
            return `${styles.button} ${styles.delete}`;
        } else if (label === "戻す") {
            return `${styles.button} ${styles.incomplete}`;
        } else {
            return styles.button;
        }
    })();

    return (
        <button type="button" className={buttonStyle} onClick={handleClick}>
            {label}
        </button>
    );
};
