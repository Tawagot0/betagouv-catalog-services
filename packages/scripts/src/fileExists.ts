import { existsSync } from "fs";
const fileExists = (path: string) => existsSync(path);
export default fileExists;
