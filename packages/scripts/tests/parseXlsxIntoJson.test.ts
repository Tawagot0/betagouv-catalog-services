import { describe, test, expect } from "vitest";
import parseXlsxIntoJson from "../src/parseXlsxIntoJson";

describe("parseXlsxIntoJson méthode", () => {
  test("doit retourner un json avec un tableau vide", async () => {
    const path = __dirname + "/ressources/empty.xlsx";
    const result = await parseXlsxIntoJson(path);
    expect(result).toStrictEqual([]);
  });

  test("doit retourner un json avec 4 objets", async () => {
    const path = __dirname + "/ressources/services.xlsx";
    const result = await parseXlsxIntoJson(path);
    expect(result.length).toStrictEqual(4);
  });

  test("doit throw une erreur avec un fichier inexistant", async () => {
    const path = "filenotfound.xlsx";
    expect(async () => await parseXlsxIntoJson(path)).rejects.toThrowError();
  });
});
