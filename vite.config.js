import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["8050ba0bf5a2.ngrok-free.app"], // atau "all"
    host: true, // ini penting untuk menerima koneksi dari luar
    port: 5173,
  },
});
