import React from "react";
import { useState } from "react";


const Login = () => {

    const [username, setusername] = useState('');
    const [user_password, set_user_password] = useState('');
    const loginUser = async (ev) => {
        ev.preventDefault();
        const respon = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                user_password
            })
        });
        const data = respon.json();
        if (respon.status === 400 || respon.status === 400 || !data) {
            window.alert("Invalid Details");
        } else {
            window.alert("Login successful");
            window.location = "/After_login";
        }
    }
    return (
        <>
        <form method="POST">
            <div className="h-screen flex justify-center">
                <div className="h-1/2 bg-slate-200 w-1/3 mt-40 rounded-md shadow-lg 
                shadow-black flex flex-col justify-evenly">
                    <div className="flex justify-center flex-col">
                        <h1 className="text-md ml-8 mb-4">User name</h1>
                        <input onChange={(e) => setusername(e.target.value)}
                            name="username"
                            id="username"
                            value={username} type="text" className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                    </div>
                    <div className="flex justify-center flex-col">
                        <h1 className="text-md ml-8 mb-4">Password</h1>
                        <input onChange={(e) => set_user_password(e.target.value)}
                            name="user_password"
                            id="user_password"
                            value={user_password}
                            type="password" className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                    </div>
                    <div className="flex justify-center">
                        <button className=" bg-slate-400 rounded-md 
                            cursor-pointer px-4 w-1/5 py-3 border-2 border-black"
                             onClick={loginUser}>log in</button>
                    </div>
                </div>
            </div>
            </form>
        </>
    )
}

export default Login;