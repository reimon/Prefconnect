import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import eventRoutes from "./routes/eventRoutes";
import logger from "./utils/logger";

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para log de requisições
app.use((req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Middleware para parsing de JSON
app.use(express.json());

// Rotas da aplicação
app.use("/api/events", eventRoutes);

// Servir arquivos estáticos
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rota de verificação de status
app.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK", timestamp: new Date() });
});

// Middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Iniciar o servidor
app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});

export default app;
