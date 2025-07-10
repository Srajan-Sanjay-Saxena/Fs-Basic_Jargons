import fs from "fs/promises"
import { Buffer } from "buffer";

const fileHandler = await fs.open("./testing.txt" , "r")
const buff = Buffer.alloc(24);

//* Asynchronous execution of code.
const chunkData = await fileHandler.read(buff);
//* Automatically closes the file
const wholeData = await fileHandler.readFile();

console.log(chunkData);
console.log(wholeData);