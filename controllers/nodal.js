const { v4: uuidv4 } = require('uuid');

const db = require('../db')

const getdb=db.getConnection()



exports.nodal=(req,res)=>{
 

  const {name,desc,address,city,district,pincode,state,landmark,pname,mnum,email}=req.body
 

   console.log(uuidv4())
   var uuid=uuidv4()
  var photo=req.file.originalname
  console.log(photo)
  
  getdb.query(
     "INSERT INTO nodal SET ?",
     { name: name,uuid:uuid, desc: desc,photo:photo, address: address, city: city, district: district,pincode:pincode,state:state ,landmark:landmark,pname:pname,mnum:mnum,email:email},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("index", {
           message: "complaint received",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}


exports.location=(req,res)=>{
 
console.log(req.body.district)
  //const {name,desc,address,city,district,pincode,state,landmark,pname,mnum,email}=req.body
 

   console.log(uuidv4())
   var uuid=uuidv4()
 
  
  getdb.query(
     "INSERT INTO nodal SET ?",
     { district: req.body.district,state:req.body.state},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("index.html", {
           message: "complaint received",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}


// exports.nodal=(req,res)=>{
//   console.log(req.body)
//   const {name,desc,photo,address,city,district,pincode,state,landmark,pname,mnum,email}=req.body

  
//   getdb.query(
//      "INSERT INTO nodal SET ?",
//      { name: name, desc: desc,photo:photo, address: address, city: city, district: district,pincode:pincode,state:state ,landmark:landmark,pname:pname,mnum:mnum,email:email},
//      (error, results) => {
//        if (error) {
//          console.log(error);
//        } else {
//          console.log(results);
//          return res.render("index", {
//            message: "complaint received",
//          });
//        }
//      }
//    );
 
  
// //  res.send("form submited")
// }



exports.display_complaint=(req,res)=>{
  console.log(req.body)
  var district=req.body.district
  console.log(district)
  getdb.query(
     "SELECT * from nodal where district=? ",[district],
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


exports.nodalreg=(req,res)=>{
  console.log(req.body)
  const {district,email,password,state}=req.body

  
  getdb.query(
     "INSERT INTO nodalreg SET ?",
     { district:district,email:email,password:password,state:state},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nodallogin.html", {
          message: "Registered sucessfully Please Login ",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}


exports.nodallogin=(req,res)=>{
  console.log(req.body)
  const {district,email,password}=req.body

  
  getdb.query(
    "SELECT * FROM nodalreg WHERE email=?", [email],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         let pass = results[0].password;
         if(password==pass){
          let district=results[0].district
          let state=results[0].state
  
          return res.render("nodal.html", {district:district,state:state});
          //res.render("nodal");

         }
        
       }
     }
   );
 
  
//  res.send("form submited")
}
exports.nodalstatus=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE bank,nodal SET nodal.bank_status=?,bank.show_status=? WHERE bank.comp_id=nodal.comp_id AND bank.comp_id=?",["ACCEPTED","ACCEPTED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("bank.html", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nodalstatus1=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE bank,nodal SET nodal.bank_status=?,bank.show_status=? WHERE bank.comp_id=nodal.comp_id AND bank.comp_id=?",["IN PROCESS","IN PROCESS",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("bank.html", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nodalstatus2=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE bank,nodal SET nodal.bank_status=?,bank.show_status=? WHERE bank.comp_id=nodal.comp_id AND bank.comp_id=?",["COMPLETED","COMPLETED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("bank.html", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.aadharaccept=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE aadhar,nodal SET nodal.aadhar_status=?,aadhar.show_status=? WHERE aadhar.comp_id=nodal.comp_id AND aadhar.comp_id=?",["ACCEPTED","ACCEPTED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("aadhar.html", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}


exports.aadharprocess=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE aadhar,nodal SET nodal.aadhar_status=?,aadhar.show_status=? WHERE aadhar.comp_id=nodal.comp_id AND aadhar.comp_id=?",["IN PROCESS","IN PROCESS",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("aadhar", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}
exports.aadharcompleted=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE aadhar,nodal SET nodal.aadhar_status=?,aadhar.show_status=? WHERE aadhar.comp_id=nodal.comp_id AND aadhar.comp_id=?",["COMPLETED","COMPLETED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("aadhar", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}


exports.aadharhide=(req,res)=>{
  console.log(req)
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
   console.log(comp_id)
  
    getdb.query(
      "SELECT * FROM aadhar  WHERE comp_id=?",[comp_id],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          res.send(results);
         //  return res.render("aadhar", {
         //    message: "Status updated",
        //  });
        }
      }
    );
  }
//  res.send("form submited")


exports.bankhide=(req,res)=>{
  console.log(req.body.comp_id1)
   var comp_id1=req.body.comp_id1

   if(comp_id1!=""){
    getdb.query(
      "SELECT * FROM bank  WHERE comp_id=?",[comp_id1],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          res.send(results);
         //  return res.render("aadhar", {
         //    message: "Status updated",
        //  });
        }
      }
    );
   }
   
  
//  res.send("form submited")
}

exports.nodalupdate=(req,res)=>{
  // console.log(req.body.comp_id)
  //  var comp_id=req.body.comp_id
   const {comp_id,scheme,desc,state,district}=req.body
    
  getdb.query(
     "UPDATE nodal SET scheme=?,description=? WHERE comp_id=?",[ scheme ,desc, comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         getdb.query(
          "INSERT INTO education SET ?",
          { comp_id:comp_id,scheme:scheme,description:desc,state:state,district:district},
          (error, results) => {
            if (error) {
              console.log(error);
            } else {
              console.log(results);
              return res.render("scheme", {
                message: "scheme sent sucessfully",
              });
            }
          }
        );
        
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.scheme_display=(req,res)=>{
  console.log(req.body.state)
  let state=req.body.state
  getdb.query(
     "SELECT * from nodalnew where entstate=? ORDER BY id DESC",[state],
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

exports.nodalnew=(req,res)=>{
  // console.log(req.body.comp_id)
  //  var comp_id=req.body.comp_id
   const {entstate,desc}=req.body
    
  getdb.query(
     "INSERT nodalnew SET entstate=?,description=? ",[ entstate ,desc],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("otherscheme.html", {
           message: "Updated Successfully",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}



exports.childpic=(req,res)=>{
  console.log(req.body)
  const uuid=req.body.uuid

  
  getdb.query(
    "SELECT photo FROM nodal WHERE uuid=?", [uuid],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.send(results);
        
       }
     }
   );
 
  
//  res.send("form submited")
}
