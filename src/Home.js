import React from "react";

const Home = () => {
    return (
        <>
            <div className="h-screen flex justify-center">
                <div className="h-1/2 bg-slate-200 w-1/3 mt-40 rounded-md shadow-lg 
                shadow-black flex flex-col justify-evenly">
                    <div className="flex justify-center">
                        <button className="text-xl bg-blue-300
                         font-bold border-black border-2 p-3 rounded-md">
                         <a href="/login">
                         Sign in</a> </button>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-xl
                         bg-blue-300 font-bold border-black border-2 p-3 rounded-md"><a href="/signup">
                         Sign up</a></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;