import * as xlsx from "xlsx";

const parseXlsxIntoJson = (path: string) => {
  try {
    const workbook = xlsx.read(path, { type: "file" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    return xlsx.utils.sheet_to_json(worksheet);
  } catch (error) {
    throw error;
  }
};

export default parseXlsxIntoJson;
