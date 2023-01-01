import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Content = () => {

    const logout = async () => {
        try {
            const res = await fetch("/Logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                credentials: "include"
            })
            if (res.status === 200) {
                alert.success("Logout");
                window.location = "/";
            } else {
                alert.error("logout failed");
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <form method="GET">
                <div className="h-screen flex justify-center">
                    <div className="h-1/2 bg-slate-200 w-1/3 mt-40 rounded-md shadow-lg 
                shadow-black flex flex-col justify-center">
                        <div className="flex justify-center">
                            <h1 className="text-3xl mb-32">After Login / Sign up</h1>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Link onClick={logout} to="/">Logout</Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Content;