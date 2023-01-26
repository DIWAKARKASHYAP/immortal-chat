

import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import Button from '@mui/material/Button';




function Main() {
  return (

    <div>
      <div className=" bg-gradient-to-r from-blue-600 to-teal-200   h-screen w-full pt-16">
        <div className="  m-10">
          <div className=" block mt-6 sm:mt-6 sm:ml-6 sm:mr-6 sm:flex    border-black">
            <div className="  max-w-screen-xl  relative left-1/2 -translate-x-1/2  pb-10  text-gray-300">
              <div className=" sm:border-2 pt-6 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur">
                <div>
                  <div className=" hover:underline-offset-4  pb-2 ">
                    <div className="text-5xl  text-red-100 font-semibold font-mono">
                      {" "}
                      Immortal Chat{" "}
                    </div>
                    <br></br>
                    <p>please read carefully</p>
                    <p>
                      The main moto of this website is to chat between two
                      person anonymously and when ever you need your chat , you
                      can easily chat with your chat address , remember if you
                      loose your chat address not only you but both will never
                      access the chat.
                    </p>
                    <br />
                    <p>
                      To use the whole system , you require only two things:
                    </p>
                      <ul className="list-decimal pl-4">
                        <li>metamask is installed in your browser and</li>
                        <li>
                          you have some gorile ethers in your metamask
                          account .
                        </li>
                      </ul>
                    <br />
                    you can only do three things in this website :-
                    <ul className="list-disc pl-4">
                      <li>you can create a chatbox for own use </li>
                      <li>
                        if you have chat address ,no meter its your or somebody
                        else you have only read access to their chat
                      </li>
                      <li>you can only messege in your chat</li>
                    </ul>
                  </div>
                  <div className="font-light">
                    if you are confused to start don't worry ,  simpally click on start
                    button
                  </div>
                  <div className="mt-4">

                  


                  <Button variant="contained" href="/all"  size="small"  > start</Button>
                  
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Main;
