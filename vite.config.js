import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/article-sponsoris-/", // ← EXACTEMENT le nom de ton repo
});
