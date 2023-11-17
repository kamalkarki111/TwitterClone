'use client'

import { getSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Login() {

    return (
        <>
            <div className="container">
                <div className="box box-one">
                    <i className="fab fa-twitter"><img src="https://img.icons8.com/color/50/000000/twitter--v1.png" /></i>
                    <button>
                            <span onClick={()=>signIn('google')}>Sign in with Google</span>
                    </button>
                    <button>
                            <span onClick={()=>signOut()}>Sign in with Apple</span>
                    </button>
                </div>
                <h5>Or</h5>
                <div className="box box-two">
                    <form>
                        <input type="text" placeholder="Phone,email, or username" />
                    </form>
                    <button className="next-btn">Next</button>
                    <button>Forget password</button>
                </div>
                <p>Dont have an account <a href="#">Sign Up</a></p>
            </div>
        </>
    )
}