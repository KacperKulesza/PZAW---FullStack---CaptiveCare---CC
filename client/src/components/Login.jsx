import { useState } from "react"
import axios from "axios"

const Login = () => {
    return(
        <>
            <h1>Login</h1>
            <form>
                <input type="text"
                    placeholder="Enter a login..."/>
                <input type="password"
                    placeholder="Enter a password..."/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login