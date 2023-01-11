import * as z from "zod";

const schema = z.object({
  nom: z.string(),
  version: z.string(),
  description: z.string(),
  miniature: z.string().url(),
  lien: z.string().url().optional(),
});

const isValidFormat = async (objects: any) => {
  try {
    if (objects.length === 0) {
      throw new Error("Fichier XLSX vide");
    }
    objects.map((object: any) => {
      schema.parse(object);
    });
    return true;
  } catch (error) {
    throw error;
  }
};
export default isValidFormat;
