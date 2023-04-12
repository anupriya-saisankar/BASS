const express = require('express')

const router=express.Router()

const path = require('path')

const multer = require('multer')

const fs= require('fs')

const nodalController=require('./../controllers/nodal')

const bankController=require('./../controllers/bank')

const aadharController=require('./../controllers/aadhar')


const nclbController=require('./../controllers/nclb')


const educationController=require('./../controllers/education')


const adminController=require('./../controllers/admin')


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/comp_image/');
    },
  
    
    filename: function (req, file, cb) {
    
        cb(null, file.originalname)
      }
    })
//const upload = multer({ dest: 'public/comp_image/' })
var upload = multer({ storage: storage })

router.post('/nodal',upload.single("photo"),nodalController.nodal)

router.post('/educationreg',educationController.educationreg)


router.post('/educationlogin',educationController.educationlogin)


router.post('/show_education',educationController.show_education)
//const display_complaint=require('./../controllers/nodal')


router.post('/location',nodalController.location)

router.post('/nodal',nodalController.nodal)

router.post('/nodalnew',nodalController.nodalnew)

router.post('/scheme_display',nodalController.scheme_display)

router.post('/complaint',nodalController.display_complaint)

router.post('/schreq',nclbController.schreq)

router.post('/complaintadmin',adminController.complaintadmin)

router.post('/complaint1',bankController.display_complaint1)

router.get('/showdetailsfor_nclb',nclbController.showdetailsfor_nclb)



router.post('/aadhar_display',aadharController.display_aadhar)


router.post('/penciladminreg',adminController.penciladminreg)



router.post('/penciladminlogin',adminController.penciladminlogin)

router.post('/nodalreg',nodalController.nodalreg)

router.post('/nodallogin',nodalController.nodallogin)

router.post('/bankreg',bankController.bankreg)

router.post('/banklogin',bankController.banklogin)


router.post('/bank',bankController.bank)


router.post('/aadharreg',aadharController.aadharreg)

router.post('/aadharlogin',aadharController.aadharlogin)



router.post('/nclblogin',nclbController.nclblogin)

router.post('/nclbreg',nclbController.nclbreg)


router.post('/displayproof',nclbController.displayproof)


router.post('/childpic',nodalController.childpic)

////////////////////////////////////////


router.post('/nodalstatus',nodalController.nodalstatus)


router.post('/nodalstatus1',nodalController.nodalstatus1)

router.post('/nodalstatus2',nodalController.nodalstatus2)


//router.post('/scheme_display',nodalController.scheme_display)


router.post('/aadharaccept',nodalController.aadharaccept)

router.post('/aadharprocess',nodalController.aadharprocess)

router.post('/aadharcompleted',nodalController.aadharcompleted)


router.post('/aadharhide',nodalController.aadharhide)



router.post('/bankhide',nodalController.bankhide)

router.post('/nodalupdate',nodalController.nodalupdate)


router.post('/bank',bankController.bank)

router.post('/fetchnclbdata',bankController.fetchnclbdata)


router.post('/fetchbankdata',aadharController.fetchbankdata)

router.post('/nclb',nclbController.nclb)

router.post('/nclbstatus',nclbController.nclbstatus)


router.post('/nclbstatus1',nclbController.nclbstatus1)

router.post('/nclbstatus2',nclbController.nclbstatus2)


router.post('/nclbedustatus',nclbController.nclbedustatus)


router.post('/nclbedustatus1',nclbController.nclbedustatus1)

router.post('/nclbedustatus2',nclbController.nclbedustatus2)



router.post('/aadhar',aadharController.aadhar)

router.post('/banktrack',nclbController.banktrack)

router.post('/accstatus',nclbController.accstatus)

module.exports=router