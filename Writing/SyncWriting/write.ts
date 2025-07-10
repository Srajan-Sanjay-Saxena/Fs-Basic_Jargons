import fs from "fs";
import { Buffer } from "buffer";

const fileDescriptor = fs.openSync("./writing.txt", "w");
const buff = Buffer.alloc(24);
buff.write("Srajan Saxena");

fs.write(fileDescriptor, buff, 0, (err, written, buff) => {
  if (err) {
    console.log(err);
  }
  console.log(`Written ${written} bytes`);
  console.log(buff.toString("utf-8", 0, written));
});

//* Do need to close file manually
fs.close(fileDescriptor, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File closed");
});
