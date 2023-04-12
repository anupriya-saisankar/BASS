const express = require("express");

const router = express.Router();

const db = require('../db')

const getdb=db.getConnection()




const path = require('path')

const multer = require('multer')

const fs= require('fs')

// const storage = multer.diskStorage({
//     destination: (req, file,cb) =>{
//     cb(null, 'images')
//     },
//     filename:(req,file, cb)=>{
//         comp_id=req.body.comp_id
//         console.log(file)
//         cb(null,comp_id+'hello.png')
//     }
// })

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images/');
    },
  
    // filename: function(req, file, cb) {
    //    // console.log(file)
    //      req.file.forEach(element => {
    //         console.log(element)
    //     });
      //  cb(null, req.body.comp_id+file.originalname);
        //+ path.extname(file.originalname)
        filename:(req,file,cb)=>{
            if(!("_files" in req)) req._files = [];
                req._files.push(file.originalname)
            
               console.log(req._files)
        //  console.log(req)
            console.log(file)
           // console.log(file[1].originalname
            var len= req.files.length
            console.log("file length"+len)
        
        cb(null, req.body.comp_id+file.originalname);
        }

    
});
var upload = multer({ storage: storage })





router.post('/upload',upload.array('multi-files'),(req,res)=>{
     var comp_id=req.body.comp_id
     console.log(comp_id)
    console.log(req._files)
    var pic1=req._files[0]
    var pic2=req._files[1]
    var pic3=req._files[2]
    var pic4=req._files[3]
    var pic5=req._files[4]

    req._files.forEach(element=>
    getdb.query(
        "UPDATE nclb SET pic1=?,pic2=?,pic3=?,pic4=?,pic5=? WHERE comp_id=?",[pic1,pic2,pic3,pic4,pic5,comp_id],
         (error, results) => {
           if (error) {
             console.log(error);
           } else {
             console.log(results);
            
           }
         }
       )
       );

    res.render('proof')
})
    
    // router.post('/upload', upload.array('multi-files'), (req, res) => {
    //     res.render('proof')
    //   });
    


router.get('/upload',(req,res)=>{
    res.render('Image uploaded')
})

router.get('/banktrack',(req,res)=>{
    res.render('banktrack')
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus')
})

router.get('/penciladminui',(req,res)=>{
    res.render('penciladminui')
})

router.get('/penciladminlogin',(req,res)=>{
    res.render('penciladminlogin')
})



router.get('/student',(req,res)=>{
    res.render('student')
})








router.get('/',(req,res)=>{
    res.render('index')
})
  
router.get('/nodalui',(req,res)=>{
    res.render('nodalui')
})

router.get('/nodalreg',(req,res)=>{
    res.render('nodalreg')
})

router.get('/nodallogin',(req,res)=>{
    res.render('nodallogin')
})

router.get('/bankui',(req,res)=>{
    res.render('bankui')
})

router.get('/bankreg',(req,res)=>{
    res.render('bankreg')
})

router.get('/banklogin',(req,res)=>{
    res.render('banklogin')
})

router.get('/nodal',(req,res)=>{
    res.render('nodal')
})

router.get('/adminlogin',(req,res)=>{
  res.render('adminlogin')
 })
 
router.get('/studentlogin',(req,res)=>{
  res.render('studentlogin')
 })

 router.get('/getinfo',(req,res)=>{
  res.render('getinfo')
 })


 router.get('/proof',(req,res)=>{
    res.render('proof')
   })


 router.get('/aadharlogin',(req,res)=>{
    res.render('aadharlogin')
   })

   router.get('/aadharreg',(req,res)=>{
    res.render('aadharreg')
   })


   router.get('/aadharui',(req,res)=>{
    res.render('aadharui')
   })

   router.get('/aadhar',(req,res)=>{
    res.render('aadhar')
   })

   
   router.get('/nclb',(req,res)=>{
    res.render('nclb')
   })

   router.get('/nclblogin',(req,res)=>{
    res.render('nclblogin')
   })
  
   
   router.get('/nclbreg',(req,res)=>{
    res.render('nclbreg')
   })
   
   router.get('/scheme',(req,res)=>{
    res.render('scheme')
   })
  

   router.get('/otherscheme',(req,res)=>{
    res.render('otherscheme')
   })

   router.get('/educationui',(req,res)=>{
    res.render('educationui')
   })

   router.get('/educationlogin',(req,res)=>{
    res.render('educationlogin')
   })

   router.get('/donate',(req,res)=>{
    res.render('donate')
})

router.get('/home',(req,res)=>{
    res.render('home')
})

   
module.exports = router;