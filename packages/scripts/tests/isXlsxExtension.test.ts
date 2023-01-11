import { describe, test, expect } from "vitest";
import isXlsxExtension from "../src/isXlsxExtension";

describe("isXlsxExtension méthode", () => {
  test("doit retourner false avec un fichier txt", async () => {
    const path = "notfound.txt";
    const result = await isXlsxExtension(path);
    expect(result).toBe(false);
  });

  test("doit retourner false avec un fichier xlsx", async () => {
    const path = "file.xlsx";
    const result = await isXlsxExtension(path);
    expect(result).toBe(true);
  });
});
