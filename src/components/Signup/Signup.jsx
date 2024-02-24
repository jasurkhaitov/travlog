import React, { useContext } from 'react'
import { Contexts } from '../../context/Context'
import './Signup.css'

export default function Signup() {

    const {eye, setEye, type, setType, contype, consetType, coneye, consetEye, setSignup, setMdl} = useContext(Contexts)

    const handleChangeInput = () => {
        eye === 'fa-solid fa-eye' ? setEye('fa-solid fa-eye-slash') : setEye('fa-solid fa-eye')
        type === 'password'? setType('text') : setType('password')
    }

    const handleConfirmChangeInput = () => {
        coneye === 'fa-solid fa-eye' ? consetEye('fa-solid fa-eye-slash') : consetEye('fa-solid fa-eye')
        contype === 'password'? consetType('text') : consetType('password')
    }   

    function closeForm() {
        setSignup(false)
        setMdl(false)
        setType('password')
        consetType('password')
        setEye('fa-solid fa-eye-slash')
        consetEye('fa-solid fa-eye-slash')
        document.body.style.overflow = ''
    }

    const handleCloseSignup = () => {
        closeForm()
    }

    const handleModal = (event) => {
        if(event.target.className === 'modal-sign') {
            closeForm()
        }
    }
    
    document.addEventListener('keydown', (event) => {
        if(event.code == 'Escape') {
            closeForm()
        }
    })

    const handleSignup = (event) => {
        event.preventDefault()
    }

  return (
    <div className="modal-sign" onClick={handleModal}>
        <div className="sign-content">

            <div className="modal-top">
                <h3>Sign Up</h3>
                <i class="fa-sharp fa-solid fa-xmark fa-beat" onClick={handleCloseSignup}></i>
            </div>

            <p>Registration takes less than a minute but gives you full control over your studying.</p>

            <form onSubmit={handleSignup}>
                <label htmlFor="email">
                    Full Name
                    <input type="text" id="email" placeholder='Your full name' />
                </label>

                <label htmlFor="email">
                    Email
                    <input type="email" id="email" placeholder='Your working email' />
                </label>

                <label htmlFor="pass">
                    Password
                    <input type={type} id="pass" placeholder='Your password' />
                    <i class={eye} onClick={handleChangeInput}></i>
                </label>

                <label htmlFor="conpass">
                    Confirm Password
                    <input type={contype} id="conpass" placeholder='Your confirm password' />
                    <i class={coneye} onClick={handleConfirmChangeInput}></i>
                </label>

                <div className='btnSign'>
                    <button type='submit'>Sign up</button>
                    <button type='reset'>Reset</button>
                </div>
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
