import { describe, test, expect } from "vitest";
import convert from "../src/convert";

describe("convert méthode", () => {
  test.skip("doit créer le fichier JSON", async () => {
    const path = __dirname + "/ressources/services.xlsx";
    const result = await convert(path);
  });

  test("doit throw une erreur avec un fichier introuvable", async () => {
    const path = "file.xlsx";
    expect(async () => await convert(path)).rejects.toThrow(
      "Fichier introuvable"
    );
  });
  test("doit throw une erreur avec un fichier qui n'est pas un XLSX", async () => {
    const path = __dirname + "/ressources/file.txt";
    expect(async () => await convert(path)).rejects.toThrow(
      "Le fichier n'est pas de type .xlsx"
    );
  });
});
