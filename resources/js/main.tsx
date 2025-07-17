import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import TodoApp from "./pages";

createRoot(document.getElementById("app")!).render(
    <StrictMode>
        <TodoApp />
    </StrictMode>
);
