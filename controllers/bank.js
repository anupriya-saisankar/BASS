const db = require('../db')

const getdb=db.getConnection()

exports.bank=(req,res)=>{
  console.log(req.body)
  const {comp_id,name,Fname,Fnum,dob,description,age,gender,state,address,district}=req.body

  
  getdb.query(
     "INSERT INTO bank SET ?",
     { comp_id:comp_id,name: name,Fnum:Fnum, Fname: Fname, dob: dob,age:age, gender: gender,state:state,description:description, address: address, district: district },
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
 
   
 //  res.send("form submited")
}


exports.bankreg=(req,res)=>{
  console.log(req.body)
  const {bank_name,email,district,password, state}=req.body

  
  getdb.query(
     "INSERT INTO bankreg SET ?",
     { bank_name:bank_name, district:district, email:email ,password:password ,state:state},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("banklogin", {
          message: "Registered Sucessfully...Please Login",
        });
       }
     }
   );
 
  
//  res.send("form submited")
}

// exports.banklogin=(req,res)=>{
//     console.log(req.body)
//     const {bank_name,district,email,password}=req.body
  
    
//     getdb.query(
//       "SELECT * FROM bankreg WHERE email=?", [email],
//        (error, results) => {
//          if (error) {
//            console.log(error);
//          } else {
//            console.log(results);
//            let pass = results[0].password;
//            if(password==pass){
//             return res.render("bank");
  
//            }
          
//          }
//        }
//      );
   
    
//   //  res.send("form submited")
//   }

  exports.display_complaint1=(req,res)=>{
    var district=req.body.district
    console.log(district)

    getdb.query(
       "SELECT * from bank where district=? ",[district],
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
  




exports.banklogin=(req,res)=>{
    console.log(req.body)
    const {bank_name,district,email,password}=req.body
  
    
    getdb.query(
      "SELECT * FROM bankreg WHERE email=?", [email],
       (error, results) => {
         if (error) {
           console.log(error);
         } else {
           console.log(results);
           let pass = results[0].password;
           if(password==pass){
            let district=results[0].district
            let bank=results[0].bank_name
            return res.render("bank",{bank:bank,district:district});
  
           }
          
         }
       }
     );
   
    
  //  res.send("form submited")
  }

  // exports.display_complaint1=(req,res)=>{

  
  //   getdb.query(
  //      "SELECT * from bank",
  //      (error, results) => {
  //        if (error) {
  //          console.log(error);
  //        } else {
  //          console.log(results);
  //          let i = 1;
  //           results.forEach((el) => {
  //           el.s_no = `${i++}.`;
  //           return el;
  //           })
  //          return res.send(results);
        
  //        }
  //      }
       
  //    );
     
     
  // }
  

  
  exports.fetchnclbdata=(req,res)=>{

   // console.log("fetch"+req.body.comp_id)
    var comp_id=req.body.comp_id
    console.log(comp_id)
    if(comp_id!=""){
      getdb.query(
        "SELECT * FROM bank  WHERE comp_id=?",[comp_id],
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