import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import path from "path";

export default defineConfig({
    server: {
        host: "0.0.0.0", // コンテナ外からアクセスできるように
        port: 5173, // デフォルトポート
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
    },
    plugins: [
        laravel({
            input: ["resources/js/main.tsx"],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },
});
