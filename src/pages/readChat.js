import React ,{useState}from "react";
import {ethers} from "ethers";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import {Abi} from "../components/contract"


function ReadChat() {


    // const contractAddress = "0xE8B313dC5Bfc6d717C344650C5d92bF038C11dDC" ;






    // const [read, setRead] = useState("")

    const getData = async () => {

                                        //this code is completed to talk to smart contract or run functions

        const chatAddress = await document.getElementById("chatAddress")

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts" , []);
        const signer = await provider.getSigner();

        let reg = RegExp(/[0-9A-Fa-x]{42}/g);
        if (reg.test(chatAddress.value)) {

          document.getElementById("message").innerHTML =""
          document.getElementById("errorMsg").innerHTML = ""

          

          try {
            
            
            const contractInstance = new ethers.Contract(chatAddress.value , Abi , signer ) ;

            chatAddress.value = " " ;
        
          const address = await contractInstance.data()
          
          document.getElementById("addressOne").innerHTML = address[0]
          document.getElementById("addressTwo").innerHTML = address[1]

          console.log(address[0])

        const numberOfMessages =  await contractInstance.arrayMessageLength()
        
        let numberOfMessagesInt = await ethers.utils.formatEther( numberOfMessages )*10e17
        // await setRead(await address[1])
        // console.log(ethers.utils.formatEther( address ));

        console.log(numberOfMessagesInt);

        for (let i = 0; i < numberOfMessagesInt; i++) {
          const message = await contractInstance.allMessages(i)
          
          // this line we have to change 
          
          if (message.slice(-1) === "1") {
            
            document.getElementById("message").innerHTML += ` <div id="messageOne"  > ${message.slice(0,-1) } </div>`
          }else if(message.slice(-1) === "2"){
            document.getElementById("message").innerHTML += `<div id="messageTwo"  > ${message.slice(0,-1) } </div>`
          }
          
          
          console.log(message)
          
        }
      } catch (error) {
        console.log(error)
        document.getElementById("errorMsg").innerHTML="Please write the correct address"
      }
      
    } else {
      document.getElementById("errorMsg").innerHTML = "please write the correct Chat Address "
      console.log("this is the error message which present at end of statement")
    }
                                        // code for deploty a new contract

        // const message = await document.getElementById("message").value


        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        // await provider.send("eth_requestAccounts" , []);
        // const signer = await provider.getSigner();
        
        // const newContract= new ethers.ContractFactory(contractAbi , byteCode , signer)
        
        // const deploy = await newContract.deploy(message);

        // const transactionRecipt = await deploy.deployTransaction.wait();

        // console.log(transactionRecipt)





    }
    
    return (
      <>
        <div className=" bg-gradient-to-r from-blue-400 to-teal-200    w-full pt-16 pb-1">
          <div className="  m-12 sm:border-2 pt-6 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur text-white ">
            <div className=" text-5xl capitalize text-red-100 font-semibold font-mono">
              Read Chat{" "}
            </div>
            <div></div>

            {/* <div>{read} </div> */}
            <div>Write ChatAddress</div>
            <TextField
              fullWidth
              id="chatAddress"
              label="Write Chat Address "
              variant="filled"
              type="text"
              className=" bg-white/70 "
            />
            <Button variant="contained" size="large" onClick={getData}>
              {" "}
              Read{" "}
            </Button>
            <div id="errorMsg"></div>
            <div id="addresses" className="  text-white md:flex relative">
              <div className="bg-blue-200 text-blue-700   p-2 mt-4 rounded-md inline-block  border-2 border-blue-500">
                <span className=" text-xs font-light font-serif ">
                  First Person Address
                </span>
                <div id="addressOne" className=" text-sm"></div>
              </div>
              <div className="bg-blue-700 text-blue-200 border-blue-500 p-2 mt-4 rounded-md  absolute right-0 border-2 ">
                <span className=" text-xs font-light font-serif ">
                  Second Person Address
                </span>
                <div id="addressTwo" className=" text-sm"></div>
              </div>
            </div>
            <div id="message" className=" mt-20 md:mt-2 flex flex-col ">
              {/* <div id="messageLeft" className=" flex flex-col"></div> */}
              {/* <div id="messageOne"  className=" bg-blue-100 text-blue-700 text-sm font-base inline-block  max-w-sm md:max-w-md  pb-1 pl-2 pr-2 rounded-md ">today is good daytoday is is good daytoday is is good daytoday is is good daytoday is good daytoday </div> */}
              {/* <div id="messageRight" className=" flex flex-col  "> */}
                {/* <div id="messageTwo"  className=" bg-blue-700 text-blue-100 text-sm  inline-block max-w-sm md:max-w-md ml-auto  pb-1 pl-2 pr-2 rounded-md ">today is good day</div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </>
    );
}

export default ReadChat;
