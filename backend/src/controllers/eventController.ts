import { Request, Response } from "express";
import { BlobServiceClient } from "@azure/storage-blob";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import dotenv from "dotenv";
import logger from "../utils/logger";

dotenv.config();

const blobSasUrl = process.env.AZURE_BLOB_SAS_URL;
if (!blobSasUrl) {
  throw new Error("AZURE_BLOB_SAS_URL is not defined in .env file");
}
const blobServiceClient = new BlobServiceClient(blobSasUrl);

const uploadPhotos = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    logger.error("No files uploaded in controller");
    return res.status(400).json({ error: "No files uploaded" });
  }

  const uploadPromises = files.map(async (file) => {
    const uniqueId = uuidv4();
    const fileExtension = path.extname(file.originalname);
    const blobName = `${uniqueId}${fileExtension}`;
    const containerClient = blobServiceClient.getContainerClient("");
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    logger.info(`Uploading file to Azure Blob Storage: ${blobName}`);

    try {
      await blockBlobClient.uploadFile(file.path);
      return {
        originalName: file.originalname,
        blobUrl: `${blobSasUrl}/${blobName}`,
        uniqueId: uniqueId,
      };
    } catch (err) {
      const error = err as Error;
      logger.error(
        "Failed to upload file to Azure Blob Storage: %s",
        error.message
      );
      throw error;
    }
  });

  try {
    const results = await Promise.all(uploadPromises);
    logger.info("All files uploaded successfully");
    res
      .status(200)
      .json({ message: "Files uploaded successfully", files: results });
  } catch (err) {
    const error = err as Error;
    logger.error("Failed to upload files: %s", error.message);
    res.status(500).json({ error: "Failed to upload files" });
  }
};

export { uploadPhotos };
