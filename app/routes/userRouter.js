const express=require('express');
const validateJoiSchema = require('../middleware/validate');
const signUpSchema = require('../validate/signUpSchema');
const loginSchema = require('../validate/loginSchema');
const { signUp, login } = require('../controller/userController');
const updateSchema = require('../validate/updateSchema');
const router=express.Router();

router.post('/signup',validateJoiSchema(signUpSchema),signUp);

router.post('/login',validateJoiSchema(loginSchema),login);

router.put('/update',validateJoiSchema(updateSchema),);
module.exports=router;