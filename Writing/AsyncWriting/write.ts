import fs from "fs/promises"
import { Buffer } from "buffer";

const fileHandler = await fs.open("./writing.txt" , "w");
const dataBuff = Buffer.from("Hi my self srajan")
const { bytesWritten , buffer } = await fileHandler.write(dataBuff , 0 , dataBuff.length);
await fileHandler.close();

console.log("Number of bytes written are : ",bytesWritten);
console.log("data buffer: ", buffer);