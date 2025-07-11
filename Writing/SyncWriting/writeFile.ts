import fs from "fs";

//* writeFile manages opening and closing of file internally ,used to write to the file at one
const fileDescriptor = fs.openSync("./writing.txt" , "w");
/**
 * Description : manages opening and closing of file internally ,used to write to the file at once , bad practice to write huge data to a file
 * @param {any} fileDescriptor 
 * @param {any} "HellothisiswriteFile"
 * @param {any}
 * @returns {any}
 */
fs.writeFile(fileDescriptor , "Hello this is writeFile" , (err) =>{
    if(err){
        console.log("Some error occurred" , err);
    }
    console.log("Writing ot the file finished");
})
