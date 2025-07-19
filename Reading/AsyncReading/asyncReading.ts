import fs from "fs/promises"
import { Buffer } from "buffer";

const fileHandler = await fs.open("./testing.txt" , "r")
const buff = Buffer.alloc(24);

//* Asynchronous execution of code.
//^ Only the buffer's length bytes will be read + here we have to manually close the file.
const chunkData = await fileHandler.read(buff);
// await fileHandler.close();

//* Automatically closes the file , and will read all the data buffer
const wholeData = await fileHandler.readFile();

await fileHandler.close()



console.log(chunkData);
console.log(wholeData);