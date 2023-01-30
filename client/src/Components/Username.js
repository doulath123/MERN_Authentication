import React from 'react'
import {Toaster} from "react-hot-toast";
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate';

function Username() {
    const formik=useFormik({
        initialValues:{
            username:""
        },
        validate: usernameValidate,
        validateOnBlur:false,
        validateOnChange:false,
        onSubmit:async values=>{
            console.log(values)
        }
    })
  return (
    <div>
        
        <form onSubmit={formik.handleSubmit}>
    <div>
        <img/>
    </div>
    <div>
        <input {...formik.getFieldProps('username')} />
        <button>Let's Go</button>
    </div>
    <div>
        <span>Not a Member</span>
    </div>
</form>
    </div>
    



  )
}

export default Username
