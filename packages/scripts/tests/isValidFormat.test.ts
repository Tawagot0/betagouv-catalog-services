import { describe, test, expect } from "vitest";
import isValidFormat from "../src/isValidFormat";

describe("isValidFormat méthode", () => {
  test.skip("doit throw une erreur avec un JSON vide", async () => {
    const data = [];
    const result = await expect(
      async () => await isValidFormat(data)
    ).rejects.toThrowError("Fichier XLSX vide");
  });

  test("doit retourner true avec un fichier valide", async () => {
    const data = [
      {
        nom: "Apprentissage",
        version: "Version 1",
        description: "Explorez les données du monde de l’apprentissage",
        miniature:
          "https://mna-bucket.s3.eu-west-3.amazonaws.com/test-tech/general.jpeg",
        lien: "https://mission-apprentissage.gitbook.io/general/",
      },
    ];
    const result = await isValidFormat(data);
    expect(result).toBe(true);
  });
});
