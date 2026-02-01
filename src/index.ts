import { serve } from "bun";
import index from "./index.html";
import black from "./black.html";

const server = serve({
  routes: {
    "/": index,
    "/black": black,
    "/black/": black,
    "/black.html": black,
    "/*": index,
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
