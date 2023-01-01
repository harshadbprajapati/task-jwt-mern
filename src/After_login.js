import React, { useState } from "react";
import { useEffect, Link } from "react";
import Content from "./Content";

const After_login = () => {
    const [verify, setverify] = useState(false);
    const open_about = async () => {
        try {
            const response = await fetch('/About', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await response.json();
            console.log(data);
            setverify(true);
            if (!response.status === 200) {
                const err = new Error(response.err);
                throw err;
            }
        }
        catch (error) {
            console.log(error);
            window.location = "/";
        }
    }
    useEffect(() => {
        open_about();
    }, []);
    return (
        <>
            {
                verify ? <Content /> : <></>
            }
        </>
    )
}

export default After_login;