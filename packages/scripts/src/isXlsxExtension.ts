import { extname } from "path";
const isXlsxExtension = async (path: string) => extname(path) == ".xlsx";

export default isXlsxExtension;
