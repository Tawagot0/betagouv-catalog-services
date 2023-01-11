import convert from "./convert";

const converter = async (path: string) => {
  try {
    await convert(path);
  } catch (error) {
    throw error;
  }
};

converter(process.argv[2]);
