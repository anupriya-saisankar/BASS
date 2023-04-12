const express= require("express")

const db=require('./../db')
const path = require("path");
const dotenv = require("dotenv")
dotenv.config({ path: "./.env" });
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const publicDirectory2 = path.join(__dirname,'./../public')
const publicDirectory = path.join(__dirname,'./../public/images')
const publicDirectory3 = path.join(__dirname,'./../public/comp_image')
const publicDirectory1 = path.join(__dirname,'./../views')


app.use(express.static(publicDirectory))
app.use(express.static(publicDirectory1))
app.use(express.static(publicDirectory2))
app.use(express.static(publicDirectory3))

app.set('view engine','html')

// app.use(express.static("images"));

// app.get("/static", (req, res) => {
//   res.render("static");
// });

const getdb=db.getConnection()
getdb.connect((error)=>{
  if(error){
    console.log(error)
  }else{
    console.log("Database connected")
  }
})

app.use("/",require('./../routes/page'))
app.use("/auth",require('./../routes/function'))

//home--->localhost:5001/


app.listen(500,()=>{
    console.log("server listen on 5001")
})