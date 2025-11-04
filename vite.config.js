import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["2eb85f7eac20.ngrok-free.app"], // atau "all"
    host: true, // ini penting untuk menerima koneksi dari luar
    port: 5173,
  },
});
