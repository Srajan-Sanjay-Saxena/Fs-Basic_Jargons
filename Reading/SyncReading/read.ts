import fs from "fs";
import { Buffer } from "buffer";

//* Synchronously opening the file in read mode.
const fileDescriptor = fs.openSync("./testing.txt", "r");
const buff = Buffer.alloc(24);

/**
 * Description : The read function provides more granular control than readFile function , because here we can specify multiple params , one of the param is that we can define maximum amount of chunk size using buffer , and that same buffer we can get in the call back to get the data.
 * @param {any} fileDescriptor : descriptor number of the file
 * @param {any} buff : 
 * @param {any} byteRead : number of bytes read , can be controlled using buff param outside callback
 * @returns {void} 
 */

//^ It is actually safe to use statSync even for 10gb files , because it doesn't read the content at all , it just reads the metadata of the file

const size = fs.statSync("./testing.txt").size;

console.log(`Size of the file is ${size}`);
fs.read(fileDescriptor, buff, (err, byteRead , buff) => {
  if (err) {
    console.log(err);
  }
  console.log("No error ....");
  console.log(buff.toString("utf-8" , 0 , byteRead));
});

fs.close(fileDescriptor , (err) => {
  if(err){
    console.log(err);
  }
  console.log("File closed");
})