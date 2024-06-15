import { Router } from "express";
import multer from "multer";
import { uploadPhotos } from "../controllers/eventController";
import logger from "../utils/logger";

const imageFileFilter = (req: any, file: any, cb: any) => {
  if (!file.mimetype.startsWith("image/")) {
    logger.error(`File upload attempt with invalid type: ${file.mimetype}`);
    return cb(new Error("Only image files are allowed!"), false);
  }
  cb(null, true);
};

const upload = multer({
  dest: "temp/",
  fileFilter: imageFileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limite de 10MB para cada arquivo
});

const router = Router();

// Usando upload.array para aceitar múltiplos arquivos com o campo 'photos'
router.post(
  "/upload",
  (req, res, next) => {
    upload.array("photos", 4)(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_UNEXPECTED_FILE") {
          logger.error("Too many files uploaded");
          return res
            .status(400)
            .json({ error: "Too many files uploaded. Maximum is 4." });
        } else if (err.message === "Only image files are allowed!") {
          logger.error("Invalid file type");
          return res
            .status(400)
            .json({ error: "Only image files are allowed!" });
        }
        return next(err);
      }
      next();
    });
  },
  (req, res) => {
    logger.info(
      `Request received with method: ${req.method} and URL: ${req.url}`
    );
    if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
      logger.error("No files uploaded");
      return res.status(400).json({ error: "No files uploaded" });
    }

    logger.info(
      `Files uploaded: ${(req.files as Express.Multer.File[])
        .map((file) => file.originalname)
        .join(", ")}`
    );
    uploadPhotos(req, res);
  }
);

export default router;
