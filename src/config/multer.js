import multer from "multer";
import { v4 as uuidv4 } from "uuid"; // Importando a função v4 do pacote uuid com um alias
import { extname, resolve } from "path"; // Corrigido para importar 'path' em vez de 'node:path'

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      // Gerando um nome único para o arquivo usando uuidv4 e mantendo a extensão original
      const newFilename = `${uuidv4()}${extname(file.originalname)}`;
      callback(null, newFilename);
    }
  })
};
