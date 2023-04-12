const db = require('../db')

const getdb=db.getConnection()

exports.aadhar=(req,res)=>{
  console.log(req.body)
  const {comp_id,name,Fname,Fnum,dob,description,age,state,gender,address,district}=req.body


  getdb.query(
     "INSERT INTO aadhar SET ?",
     { comp_id:comp_id,name: name, Fname: Fname,Fnum:Fnum, dob: dob,description:description,state:state,age:age, gender: gender, address: address, district: district },
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("getinfo", {
           message: "data sent sucessfully",
         });
       }
     }
   );

    }

    exports.aadharreg=(req,res)=>{
      console.log(req.body)
      const {username,password,state,district}=req.body
   
      
      getdb.query(
         "INSERT INTO aadharreg SET ?",
         {username:username ,password:password, state:state, district:district },
         (error, results) => {
           if (error) {
             console.log(error);
           } else {
             console.log(results);
             return res.render("aadharlogin", {
              message: "Registered successfully... Please Login",
             });
           }
         }
       );
     
      
    //  res.send("form submited")
   }
   
 
     
exports.display_aadhar=(req,res)=>{
  console.log(req.body)
  var district=req.body.district
  console.log(district)
 
   getdb.query(
      "SELECT * from aadhar where district=? ",[district],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          let i = 1;
           results.forEach((el) => {
           el.s_no = `${i++}.`;
           return el;
           })
          return res.send(results);
       
        }
      }
      
    );
    
    
 }





exports.aadharlogin=(req,res)=>{
   console.log(req.body)
   const {email,password,state,district}=req.body
 
   
   getdb.query(
     "SELECT * FROM aadharreg WHERE username=?", [email],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          let pass = results[0].password;
          if(password==pass){
            let district=results[0].district
           return res.render("aadhar",{district:district});
 
          }
         
        }
      }
    );
  
   
 //  res.send("form submited")
 }

      
  exports.fetchbankdata=(req,res)=>{

    console.log("fetch"+req.body.comp_id)
    var comp_id=req.body.comp_id
    console.log(comp_id)
    if(comp_id!=""){
      getdb.query(
        "SELECT * FROM aadhar  WHERE comp_id=?",[comp_id],
         (error, results) => {
           if (error) {
             console.log(error);
           } else {
            res.send(results);
           }
             
         }
         
       );
       
    }
    
  
     
  }