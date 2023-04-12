
const db = require('../db')

const getdb=db.getConnection()




exports.educationreg=(req,res)=>{
    console.log(req.body)
    const {email,password,state,school_name,district}=req.body
 
    
    getdb.query(
       "INSERT INTO educationreg SET ?",
       {email:email ,password:password,school_name:school_name, state:state, district:district },
       (error, results) => {
         if (error) {
           console.log(error);
         } else {
           console.log(results);
           return res.render("educationlogin", {
            message: "Registered successfully... Please Login",
           });
         }
       }
     );
   
    
  //  res.send("form submited")
 }
 

 exports.educationlogin=(req,res)=>{
    console.log(req.body)
    const {district,email,password}=req.body
  
    
    getdb.query(
      "SELECT * FROM educationreg WHERE email=?", [email],
       (error, results) => {
         if (error) {
           console.log(error);
         } else {
           console.log(results);
           let pass = results[0].password;
           if(password==pass){
            let district=results[0].district
            let state=results[0].state
    
            return res.render("education.hbs", {district:district,state:state});
            //res.render("nodal");
  
           }
          
         }
       }
     );
   
    
  //  res.send("form submited")
  }

  
exports.show_education=(req,res)=>{
    console.log(req.body)
    var district=req.body.district
    console.log(district)
    getdb.query(
       "SELECT  education.comp_id,nclb.name,education.scheme,education.state,education.district,education.show_edustatus,education.description as description from education inner join nclb where education.comp_id=nclb.comp_id AND education.district=? ",[district],
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