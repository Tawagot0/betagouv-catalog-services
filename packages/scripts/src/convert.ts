import fileExists from "./fileExists";
import isValidFormat from "./isValidFormat";
import isXlsxExtension from "./isXlsxExtension";
import parseXlsxIntoJson from "./parseXlsxIntoJson";
import { writeFileSync } from "fs";
import { dirname, join } from "path";

interface Service {
  nom: string;
  version: string;
  description: string;
  miniature: string;
  lien: string | null;
}

const convert = async (path: string) => {
  if (!fileExists(path)) {
    throw new Error("Fichier introuvable");
  }
  const isXlsxFile = await isXlsxExtension(path);
  if (!isXlsxFile) {
    throw new Error("Le fichier n'est pas de type .xlsx");
  }
  try {
    const objects = await parseXlsxIntoJson(path);
    const isValidFile = await isValidFormat(objects);
    if (isValidFile) {
      const dirnameOutput = dirname(path);
      const pathJSONFile = join(dirnameOutput, "services.json");
      writeFileSync(pathJSONFile, JSON.stringify(objects));
      console.log(
        "Le fichier services.json a été généré dans le même dossier du fichier XLSX!"
      );
    }
  } catch (error) {
    throw error;
  }
};

export default convert;
