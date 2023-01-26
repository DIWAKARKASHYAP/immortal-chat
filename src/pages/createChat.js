import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ethers } from "ethers";

import { Abi, byteCode } from "../components/contract";

//  0xDaA5b05dFe699E3F3f29ab563E01DE5Bc82eaFf9


const CreateChat = () => {
  
  //reg.test(otherPersonAddress) || 
  
  const deployContract = async () => {
    
    const otherPersonAddress = await document.getElementById("filled").value
    const reply = await document.getElementById("errorMsg")

    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", [])
    const signer = await provider.getSigner()
    const address = await signer.getAddress()

    console.log( await signer.getAddress())
    let reg = RegExp(/[0-9A-Fa-x]{42}/g);
    if( reg.test(otherPersonAddress) && address != otherPersonAddress){
      
      reply.innerHTML=""
      
      const newcontract = new ethers.ContractFactory( Abi , byteCode , signer)
      const deploy = await newcontract.deploy(otherPersonAddress)
      
      
      const transactionRecipt = await deploy.deployTransaction.wait();
      
      console.log(transactionRecipt.contractAddress)
      
      reply.innerHTML = `Your chat address is ${transactionRecipt.contractAddress} `
      
      document.getElementById("filled").value=""
      //  reply.style.display = "block"
      
      document.getElementById("warning").style.display = "block"
    }
    else{ 

      reply.innerHTML= "please write the correct address" 

    }
      


    

  }




  return (
    <>
      <div className=" bg-gradient-to-r from-blue-400 to-teal-200   h-screen w-full pt-16">
        <div className="  m-12 sm:border-2 pt-6 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur text-white ">
          <div className=" text-5xl capitalize text-red-100 font-semibold font-mono">create chat box  </div>
          <div className=" pt-4 mb-5">
            To create a new ChatBox you have to simpally type the address of
            second person which you want to chat and confirm the transaction in
            metamask{" "}
          </div>
          <div className=" flex flex-wrap items-center justify-center mb-5 ">
            {/* <input
              type="text"
              placeholder="write the address of second person"
              className=" w-80 h-8 rounded "
            />{" "}
            <Button variant="contained" size="small" href="/createchat">
              {" "}
              create{" "}
            </Button> */}
            <TextField
              fullWidth
              id="filled"
              label="write the address of second person "
              variant="filled"
              type="text"
              className=" bg-white/70 "

            />
            {/* <input id="filled" type="text"/> */}
            <Button variant="contained" size="large"  onClick={deployContract}>
              {" "}
              create{" "}
            </Button>
          </div>
          <div className=" text-white text-xl" id="errorMsg"></div>
          <div className=" text-red-600 bg-black p-4 rounded-md text-2xl hidden " id="warning"> warning , we are not responseable if you loose this contract address </div>
          <div className=" font-light">*please wait atleast 30 sec until transaction is mine</div>
        </div>
      </div>
    </>
  );
}

export default CreateChat;
