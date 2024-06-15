// utils/uploadFile.js
import axios from "axios";
import * as mime from "react-native-mime-types";

export const uploadFileToCloud = async (fileUri) => {
  const mimeType = mime.lookup(fileUri);

  // Verifica se o arquivo é uma imagem
  if (!mimeType || !mimeType.startsWith("image/")) {
    throw new Error("Apenas arquivos de imagem são permitidos.");
  }

  const formData = new FormData();
  formData.append("photos", {
    uri: fileUri,
    name: `upload.${mime.extension(mimeType)}`,
    type: mimeType,
  });

  try {
    console.log("Sending request to API with file:", fileUri);
    const response = await axios.post(
      "http://localhost:3000/api/events/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response from API:", response.data);
    return response.data.url; // URL do arquivo na nuvem
  } catch (error) {
    console.error("Erro ao fazer upload da imagem: ", error);
    throw error;
  }
};
