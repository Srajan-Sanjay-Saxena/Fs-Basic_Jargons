import fs from "fs";
import { Buffer } from "buffer";

fs.open("./testing.txt", "r", (err, fd: number) => {
  const buff = Buffer.alloc(24);
  const size = fs.statSync("./testing.txt").size;
  if (err) {
    console.log(err);
  }
  console.log("Size of the file is : ", size);
  fs.readFile(fd, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString("utf-8"));
  });
  fs.read(fd, buff, (err, bytesRead, buff) => {
    if (err) {
      console.log(err);
    }
    console.log(buff.toString("utf-8", 0, bytesRead));
  });
});
