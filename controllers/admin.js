const db = require('../db')

const getdb=db.getConnection()

exports.penciladminreg=(req,res)=>{
  console.log(req.body)
  const {email,password}=req.body

  
  getdb.query(
     "INSERT INTO penciladminreg SET ?",
     {email:email,password:password},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("penciladminlogin", {
           message: "Registered sucessfully",
         });
       }
     }
   );
 
   
 //  res.send("form submited")
}

exports.complaintadmin=(req,res)=>{
  console.log(req.body)
  var district=req.body.district
  console.log(district)
  getdb.query(
     "SELECT * from nodal ",
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

  exports.penciladminlogin=(req,res)=>{
      console.log(req.body)
      const {bank_name,district,email,password}=req.body
    
      
      getdb.query(
        "SELECT * FROM penciladminreg WHERE email=?", [email],
         (error, results) => {
           if (error) {
             console.log(error);
           } else {
             console.log(results);
             let pass = results[0].password;
             if(password==pass){
              return res.render("penciladmin");
    
             }
            
           }
         }
       );
     
      
    //  res.send("form submited")
    }