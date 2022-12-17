// rafce
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import * as yup from 'yup'
const DemoNavigate = () => {
    // useNavigate: dùng để điều hướng trang
    const navigate = useNavigate();
    const formLogin = useFormik({
        initialValues:({
            email:'',
            password:''
        }),
        validationSchema: yup.object().shape({
            email:yup.string().required('email cannot be blank').email('email is invalid'),
            password:yup.string().required('password cannot be balank')
            // password:yup.string().required('password cannot be balank').min(6,'Ít nhất 6 kí tự').max(32,'không quá 32 kí tự').test('regex','tên lỗi')
        }),
        onSubmit:(values)=>{
            console.log(values);
            if(values.email === 'anhvu@gmail.com' && values.password == 'anhvu'){
                navigate('/bt-game')
            }else{
                alert('email or password incorect')
            }
        }
    })
    // console.log('abc');
    // ant form()






    return (
        <form className='container' onSubmit={formLogin.handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>email</p>
                <input className='form-controll' name='email' onChange={formLogin.handleChange} onBlur={formLogin.handleBlur} />
                {formLogin.errors.email&&<div className='alert alert-danger'>{formLogin.errors.email}</div>}
            </div>
            <div className="form-group">
                <p>password</p>
                <input className='form-controll' name='password' onChange={formLogin.handleChange} onBlur={formLogin.handleBlur}/>
                {formLogin.errors.password && <div className='alert alert-danger'>{formLogin.errors.password}</div>}
            </div>
            <div className="form-group">
                <button className='btn btn-success my-2' type='submit'>Login</button>
            </div>
        </form>
    )
}

export default DemoNavigate




// CODE KHÔNG DÙNG THƯ VIỆN FORMIK, SỬ DỤNG import { useNavigate } from 'react-router-dom';
  // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // });
    // // useNavigate của react routerDom dùng để chuyển hướng trang sau khi xử lý
    // const navigate = useNavigate();
    // console.log(userLogin);
    // const handleChange = (e) => {
    //     const { value, name }= e.target;
    //     setUserLogin({
    //         ...userLogin, //Lý do có dòng code này: Nếu không có dòng code này thì khi ta nhập username nó chỉ lưu username khi nhập. Khi ta nhập password thì username nhập trước đó sẽ mất đi
    //         [name]:value

    //     })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(userLogin.username == 'anhvu' && userLogin.password == 'anhvu'){
    //         // Chuyển hướng
    //         navigate('/bt-game')
    //     }else{
    //         alert('Tài khoản và mật khẩu không đúng')
    //     }
    // }


// Bản chất của fomik là useState nên mỗi lần gõ thì sẽ render lại

