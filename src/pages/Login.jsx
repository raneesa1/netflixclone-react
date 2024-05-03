import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
     const [rememberLogin, setRememberLogin] = useState(true);
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     const { user, logIn } = UserAuth();
     const navigate = useNavigate()

      const handleFormSubmission = async(e) => {
        e.preventDefault()
        try {
          await logIn(email, password);
          navigate('/')
        } catch (error) {
          console.log(error)
        }
      };

    return(
        <>
      <div className="w-full h-screen flex items-center justify-center">
        <img
          className="hidden sm:block absolute w-full h-full object-cover z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/70 fixed top-0 left-0 w-full h-screen z-10" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-md mx-auto bg-black/80 bg-opacity-70 rounded-lg p-6 sm:p-8 relative z-20">
            <h1 className="text-3xl font-bold text-white mb-6 sm:mb-8 ml-10">
             Login
            </h1>
            <form action="" onSubmit={handleFormSubmission} className="flex flex-col m-10">
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="p-3 my-2 bg-opacity-70 bg-black/80 rounded border-white border border-solid border-opacity-50 focus:outline-none focus:bg-transparent text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="p-3 my-2 bg-opacity-70 bg-black/80 rounded border-white border border-solid border-opacity-50 focus:outline-none focus:bg-transparent text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="bg-red-600 py-3 mt-4 rounded text-white font-bold">
                Sign in
              </button>
              <div className="flex justify-between items-center text-gray-600 pt-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" checked={rememberLogin} onChange={(e)=>setRememberLogin(!rememberLogin)} />
                  <span>Remember me</span>
                </label>
              </div>
              <p className="my-4 text-gray-400">
               New to Netflix?
                <a href="/signup" className="text-white">
                  Signup in here
                </a>
                .
              </p>
              <p className="my-4  text-stone-500 text-sm font-Nsans-regular">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span className="text-blue-600">Learn more.</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
    )
}

export default Login