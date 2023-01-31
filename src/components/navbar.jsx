import React from 'react'

import { ethers } from "ethers";
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import logo from "../components/logo.png"



// import  Link  from "react-router-dom";

const Navbar = () => {
    const [address, setaddress] = useState("")
  
    const connectMetamask = async () =>{
  
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts" , []);
      const signer = await provider.getSigner();
      
      setaddress( "Your Wallet Address   "+ (await signer.getAddress()))
  
      // console.log( await signer.getAddress())
      
  
    }
     
  return (
    <>

<div className="  bg-black text-white fixed top-0 w-full p-4   ">
        {/* <div className="max-w-screen-lg relative left-1/2 -translate-x-1/2 "> */}
          <div className="flex  justify-between items-center text-lg  h-full">
            <div className="flex  ">
            <img src={logo} className="absolute w-32 h-32 -top-6"/>

            </div>
            <ul className="flex  items-center   ">
                {/* <li className=" mr-10 sm:mr-14 cursor-pointer  hover:text-yellow-400 ">
                  Job
                </li>
              
                <li className=" mr-10 sm:mr-14 cursor-pointer hover:text-green-500">
                  Home
                </li>
                <li className=" mr-10 sm:mr-10 cursor-pointer hover:text-red-500">
                  Contact
                </li> */}
                <li className=" mr-10 sm:mr-10 cursor-pointer hover:text-red-500">
                
                <Button variant="contained" onClick={connectMetamask} size="small"  > connect wallet </Button>
                
                </li>
            </ul>
          </div>


          <div className=' flex items-center justify-center text-sm pt-2'>{address}</div>
        </div>
      {/* </div> */}
    
        {/* <Button variant="contained" onClick={connectMetamask}> connect wallet {address}</Button> */}
        
    </>
  )
}


export default Navbar ;
