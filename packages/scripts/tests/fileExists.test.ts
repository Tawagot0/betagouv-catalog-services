import { describe, test, expect, vi, beforeEach } from "vitest";
import fileExists from "../src/fileExists";
import { existsSync } from "fs";

vi.mock("fs", () => {
  return {
    existsSync: vi.fn(),
  };
});

beforeEach(() => {
  (existsSync as any).mockClear();
});

describe("fileExists méthode", () => {
  test("doit retourner false avec un fichier inexistant", async () => {
    (existsSync as any).mockReturnValue(false);
    const path = "notfound.txt";
    const result = await fileExists(path);
    expect(result).toBe(false);
  });

  test("doit retourner true avec un fichier existant", async () => {
    (existsSync as any).mockReturnValue(true);
    const path = "fileExists.txt";
    const result = await fileExists(path);
    expect(result).toBe(true);
  });
});
