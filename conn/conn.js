const mongoose = require("mongoose");
const conn=async(req,res)=>{
    try {
        await mongoose
    .connect("mongodb+srv://ananyamrao6:ananya77@cluster0.zfbnbma.mongodb.net/")
    .then(()=>{
        console.log("Connected");
    });
    } catch (error) {
    console.error("Connection failed:", error.message);
    }
};
conn();