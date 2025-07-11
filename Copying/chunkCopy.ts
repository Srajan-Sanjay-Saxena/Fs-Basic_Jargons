import fs from "fs";

const readFD = fs.openSync("./testing.txt", "r");
const writeFD = fs.openSync("./writing.txt", "w");

const CHUNK_SIZE = 2;
const buffer = Buffer.alloc(CHUNK_SIZE);

let position = 0;
const fileSize = fs.statSync("./testing.txt").size;

function readNextChunk() {
  fs.read(readFD, buffer, 0, CHUNK_SIZE, position, (err, bytesRead, buff) => {
    if (err) {
      console.error("Read error:", err);
      return;
    }

    if (bytesRead === 0) {
      // Done reading
      fs.close(readFD, (err) => {
        if (err) console.error("Error closing readFD:", err);
        else console.log("Read file closed");
      });

      fs.close(writeFD, (err) => {
        if (err) console.error("Error closing writeFD:", err);
        else console.log("Write file closed");
      });

      return;
    }

    // Write only the bytes read
    fs.write(writeFD, buff, 0, bytesRead, (err) => {
      if (err) {
        console.error("Write error:", err);
        return;
      }

      console.log("Chunk written:", buff.toString("utf8", 0, bytesRead));
      position += bytesRead;

      // Recursively read the next chunk
      readNextChunk();
    });
  });
}

// Start the read/write cycle
readNextChunk();
