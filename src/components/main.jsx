

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
      <div className=" bg-[url('https://wallpapers.com/images/hd/luminous-red-anonymous-2wrm4j7avzuqqm4d.jpg')] bg-no-repeat bg-cover  w-full pt-16 pb-1">
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
                     Our website enables anonymous chat between individuals. You can easily access your chat using a unique chat address. However, please note that if you lose your chat address, neither you nor the other person will be able to retrieve the chat.
                    </p>
                    <br />
                    <p>
To utilize the entire system, you only need two things:
</p>
                      <ul className="list-decimal pl-4">
                        <li>A browser with Metamask installed.</li>
                        <li>
                          A sufficient amount of Gorile ethers in your Metamask account.
                        </li>
                      </ul>
                    <br />
                    On this website, you have the ability to perform three actions:
                    <ul className="list-disc pl-4">
                      <li>Create a personal chatbox for your own use </li>
                      <li>
                       If you have a chat address, you can perform any task if it belongs to you. However, if the chat address belongs to someone else, you will only have read access to the chat.
                      </li>
                      <li>You are only able to send messages within your own chat.</li>
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
