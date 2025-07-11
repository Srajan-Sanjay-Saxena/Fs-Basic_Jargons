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

  fs.close(fileDescriptor, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("File closed");
  });
});

//* Do need to close file manually , but this is a bad practice , because both close, write function are async , so ther might be some race conditions , which might give us weird behaviour , so we should prefer calling fs.close inside 'write'
// fs.close(fileDescriptor, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("File closed");
// });
