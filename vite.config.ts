import { defineConfig } from "vite";

export default defineConfig({
  server: {
    // 💡 Option 1: The safest and most common fix for CodeSandbox
    allowedHosts: [".csb.app"],

    /* // Option 2: Less secure, but sometimes necessary if Option 1 fails.
    // Use this only if Option 1 doesn't work.
    allowedHosts: true, 
    */
  },
});
