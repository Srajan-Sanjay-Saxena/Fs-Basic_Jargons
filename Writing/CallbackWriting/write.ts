import fs from "fs"
import { Buffer } from "buffer"

//* This write function takes the buffer of the data that we want to write , its different from the buffer that is used in read , it is for storing the data , but this buffer is what that is actually being written.

fs.open("./writing.txt" , "w" , (err , fd) =>{
    const buff = Buffer.from("Hello my name is srajan");
    fs.write(fd , buff , 0 , (err , written , buff) => {
        if(err){
            console.log("Some error occurred",err);
        }
        console.log("Number of bytes written are : " ,written);
        console.log(buff.toString("utf-8"));
    })
    fs.close(fd , (err) =>{
        if(err){
            console.log("Some error occurred" , err);
        }
        console.log("File closed");
    }) 
})