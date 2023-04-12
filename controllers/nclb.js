const db = require('../db')

const getdb=db.getConnection()

exports.nclb=(req,res)=>{
  console.log(req.body)
  const {comp_id,name,Fname,Fnum,dob,age,nodal_email,nodal_contact,gender,description,state,address,district,aadhar,bank}=req.body

  
  getdb.query(
     "INSERT INTO nclb SET ?",
     { comp_id:comp_id,name: name, Fname: Fname,Fnum:Fnum, dob: dob,age:age,description:description,state:state,gender: gender, address: address, district: district ,aadhar:aadhar,bank:bank,nodal_email:nodal_email ,nodal_contact:nodal_contact},
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         getdb.query(
          "INSERT INTO banktrack SET ?",
          { comp_id:comp_id,bank:bank},
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
     }
   );

   
 
   
 //  res.send("form submited")
}


exports.nclbreg=(req,res)=>{
  console.log(req.body)
  const {email,password}=req.body

  
  getdb.query(
     "INSERT INTO nclbreg SET ?",
     {email:email ,password:password },
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclbreg", {
           message: "registered sucessfully",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclblogin=(req,res)=>{
   console.log(req.body)
   const {email,password}=req.body
 
   
   getdb.query(
     "SELECT * FROM nclbreg WHERE email=?", [email],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log(results);
          let pass = results[0].password;
          if(password==pass){
           return res.render("nclb");
 
          }
         
        }
      }
    );
  
   
 //  res.send("form submited")
 }

 exports.showdetailsfor_nclb=(req,res)=>{

  
  getdb.query(
     `SELECT comp_id,edusts,name,Fname,dob,age,address,description,gender,schemerequest,aadhar,bank,schsts,pic1,pic2,pic3,pic4,pic5,accstatus,state,district,CONCAT(state,"(",district,")") AS district_state,CONCAT(nodal_email,"(",nodal_contact,")") AS contact from nclb`,
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

exports.nclbedustatus=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,education SET nclb.edusts=?,education.show_edustatus=? WHERE education.comp_id=nclb.comp_id AND education.comp_id=?",["ACCEPTED","ACCEPTED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclbedustatus1=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,education SET nclb.edusts=?,education.show_edustatus=? WHERE education.comp_id=nclb.comp_id AND education.comp_id=?",["IN PROGRESS","IN PROGRESS",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclbedustatus2=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,education SET nclb.edusts=?,education.show_edustatus=? WHERE education.comp_id=nclb.comp_id AND education.comp_id=?",["ADMITTED IN SCHOOL","ADMITTED IN SCHOOL",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclbstatus=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,nodal SET nclb.schsts=?,nodal.show_status=? WHERE nodal.comp_id=nclb.comp_id AND nodal.comp_id=?",["ACCEPTED","ACCEPTED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclbstatus1=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,nodal SET nclb.schsts=?,nodal.show_status=? WHERE nodal.comp_id=nclb.comp_id AND nodal.comp_id=?",["IN PROGRESS","IN PROGRESS",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.nclbstatus2=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,nodal SET nclb.schsts=?,nodal.show_status=? WHERE nodal.comp_id=nclb.comp_id AND nodal.comp_id=?",["COMPLETED","COMPLETED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("nclb", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}

exports.schreq=(req,res)=>{
  
  const {desc, comp_id}=req.body
   console.log(req.body)
   // console.log(obj.comp_id)
   // var reqData =  JSON.stringify(req.body);
   // var comp_id=JSON.parse(reqData)
  
   // console.log("string :::: " + reqData);
   // console.log("parse:::: " + comp_id.comp_id);

 getdb.query(
   "UPDATE nclb SET schemerequest=? WHERE comp_id=?",[desc,comp_id],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        console.log(results);
        return res.render("student", {
          message: "SCHEME REQUEST SEND SUCCESFULLY",
        });
      }
    }
  );

 
//  res.send("form submited")
}

exports.displayproof=(req,res)=>{
  console.log(req.body)
  const comp_id=req.body.comp_id

  
  getdb.query(
    "SELECT pic1,pic2,pic3,pic4,pic5 FROM nclb WHERE comp_id=?", [comp_id],
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

exports.accstatus=(req,res)=>{
  console.log(req.body.comp_id)
   var comp_id=req.body.comp_id
    // console.log(obj.comp_id)
    // var reqData =  JSON.stringify(req.body);
    // var comp_id=JSON.parse(reqData)
   
    // console.log("string :::: " + reqData);
    // console.log("parse:::: " + comp_id.comp_id);
 
  getdb.query(
    "UPDATE nclb,banktrack SET nclb.accstatus=?,banktrack.status=? WHERE banktrack.comp_id=nclb.comp_id AND banktrack.comp_id=?",["STIPEND RECEIVED","STIPEND ACCEPTED",comp_id],
     (error, results) => {
       if (error) {
         console.log(error);
       } else {
         console.log(results);
         return res.render("banktrack", {
           message: "Status updated",
         });
       }
     }
   );
 
  
//  res.send("form submited")
}




exports.banktrack=(req,res)=>{
  getdb.query(
     "SELECT * from banktrack",
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
