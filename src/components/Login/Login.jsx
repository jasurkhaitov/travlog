import React, { useContext } from 'react'
import './Login.css'
import { Contexts } from '../../context/Context'

export default function Login() {

    const {eye, setEye, type, setType, setLogin, setMdl, setSignup} = useContext(Contexts)

    const handleChangeInput = () => {
        eye === 'fa-solid fa-eye' ? setEye('fa-solid fa-eye-slash') : setEye('fa-solid fa-eye')
        type === 'password'? setType('text') : setType('password')
    }

    const handleCloseLogin = () => {
        setLogin(false)
        setMdl(false)
    }

    const handleMoveSignup = () => {
        setLogin(false)
        setSignup(true)
    }

  return (
    <div className="modal-login">
        <div className="login-content">

            <div className="modal-top">
                <h3>Log In</h3>
                <i class="fa-sharp fa-solid fa-xmark fa-beat" onClick={handleCloseLogin}></i>
            </div>

            <p>Log in to your account using email and password provided during registration.</p>

            <form action="#!">
                <label htmlFor="email">
                    Email
                    <input type="email" id="email" placeholder='Your working email' />
                </label>

                <label htmlFor="pass">
                    Password
                    <input type={type} id="pass" placeholder='Your password' />
                    <i class={eye} onClick={handleChangeInput}></i>
                </label>

                <button>Log in</button>

                <p>Don't have an account? <span onClick={handleMoveSignup}>Sign up</span> </p>
            </form>

            <p>Or sign in with</p>

            <ul>
                <li>
                    <i class="fa-brands fa-facebook-f"></i>
                </li>

                <li>
                    <i class="fa-brands fa-google"></i>
                </li>

                <li>
                    <i class="fa-brands fa-twitter"></i>
                </li>

                <li>
                     <i class="fa-brands fa-linkedin-in"></i>
                </li>

            </ul>

        </div>
    </div>
  )
}