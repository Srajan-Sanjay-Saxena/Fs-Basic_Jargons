import fs from "fs"

const fileDescriptor = fs.openSync("./testing.txt" , "r");

//* Very bad practice to read huge file .....
const data  = fs.readFileSync(fileDescriptor , "utf-8")
console.log(data);
