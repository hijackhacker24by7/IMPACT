import React from "react";
import { Link } from "react-router-dom";
// import Profile from './components/Profile'

function Home() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gradient-134">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Home Page!</h1>
                    <p className="text-lg mb-6">Create your account today and unlock all the features we offer. Let's get started!</p>

                    <div>
                        <Link to="/Signup" className="flex items-center justify-center mt-5">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Signup</button>
                        </Link>
                        <Link to="/Signin" className="flex items-center justify-center mt-5">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Signin</button>
                        </Link>
                        <Link to="/Org" className="flex items-center justify-center mt-5">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">OrgSignup</button>
                        </Link>
                        <Link to="/Profile" className="flex items-center justify-center mt-5">
                            <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700">Profile</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;