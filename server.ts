import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import chatHandler from "./api/chat"; 

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser for API requests
  app.use(express.json());

  // Use the API handler we created for Vercel
  app.post("/api/chat", async (req, res) => {
    await chatHandler(req, res);
  });

  // Vite middleware for development (so the local preview continues to work properly)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // When deploying on Vercel, this server.ts is bypassed, and Vercel naturally uses standard static hosting + the /api folder.
    // This fallback merely protects production setups if the user executes 'node server.js' instead.
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
