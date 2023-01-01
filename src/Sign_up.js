import React from "react";
import { useState } from "react";

const Sign_up = () => {

    const [user, setuser] = useState({
        fullname: "", email: "", username: "", user_password: ""
    });


    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setuser({ ...user, [name]: value });
    }


    const postdata = async (ev) => {
        ev.preventDefault();
        const { fullname, email, username, user_password } = user;
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname, email, username, user_password
            })
        });
        const data = await response.json();
        if (response.status === 422 || !data) {
            window.alert("Invalid data or Email already exist");
            console.log("Invalid data or Email already exist");
        } else {
            window.alert("data stored successfully");
            console.log("data stored successfully");
            window.location = "/After_login";
        }
    }


    return (
        <>
            <form method="POST">
                <div className="h-screen flex justify-center">
                    <div className="h-2/3 bg-slate-200 w-1/3 mt-40 rounded-md shadow-lg 
                shadow-black flex flex-col justify-evenly">
                        <div className="flex justify-center flex-col">
                            <h1 className="text-md ml-8 mb-4">Name</h1>
                            <input onChange={handleInputs} type="text" name="fullname"
                                id="fullname"
                                value={user.fullname} className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1 className="text-md ml-8 mb-4">email</h1>
                            <input onChange={handleInputs} type="email"
                                name="email"
                                id="email"
                                value={user.email} className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1 className="text-md ml-8 mb-4">User name</h1>
                            <input onChange={handleInputs} type="text"
                                name="username"
                                id="username"
                                value={user.username} className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                        </div>
                        <div className="flex justify-center flex-col">
                            <h1 className="text-md ml-8 mb-4">Password</h1>
                            <input onChange={handleInputs} type="password"
                                name="user_password"
                                id="user_password"
                                value={user.user_password} className="mx-8 h-10 border-black
                         border-2 rounded-lg"></input>
                        </div>
                        <div className="text-md ml-8 mb-4 flex justify-center">

                            <input className="bg-slate-400 rounded-md 
                            cursor-pointer px-4 w-1/5 py-3" type="submit"
                                name="submit" id="submit" value="submit"
                                onClick={postdata} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Sign_up;