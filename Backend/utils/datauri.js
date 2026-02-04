import DataUriParser from "datauri/parser.js"

import path from "path";

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

export default getDataUri;

// Backend/utils/dataUri.js
// export const getDataUri = (file) => {
//   if (!file) return null;
//   const fileExtension = file.originalname.split(".").pop();
//   const base64 = file.buffer.toString("base64");
//   return `data:image/${fileExtension};base64,${base64}`;
// };
