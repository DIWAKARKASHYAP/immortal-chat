import React, { useState } from "react";
import { ethers } from "ethers";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { Abi } from "../components/contract";

function JoinChat() {
    const [Instance, setInatance] = useState();
    const [MessageCount, setMessageCount] = useState();
    const [Address, setAddress] = useState();

    // console.log(Instance)

    console.log(Address);

    const getData = async () => {
        //this code is completed to talk to smart contract or run functions

        document.getElementById("message").innerHTML = "";


        const chatAddress =
            document.getElementById("chatAddress").value || Address;

        document.getElementById("chatAddress").value = "";

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();

        let reg = RegExp(/[0-9A-Fa-x]{42}/g);
        if (reg.test(chatAddress)) {
            setAddress(chatAddress);

            try {
                const contractInstance = new ethers.Contract(
                    chatAddress,
                    Abi,
                    signer
                );

                setInatance(await contractInstance);
                // console.log(Instance)

                // console.log(await contractInstance)
                const address = await contractInstance.data();
                // console.log(address)

                // console.log(address[0]);

                document.getElementById("afterContent").style.display = "block"


                document.getElementById("addressTwo").innerHTML = chatAddress;

                const numberOfMessages =
                    await contractInstance.arrayMessageLength();

                let numberOfMessagesInt =
                    (await ethers.utils.formatEther(numberOfMessages)) * 10e17;

                console.log(numberOfMessagesInt);
                setMessageCount(numberOfMessagesInt);

                // setInterval(`checkUpdate()`, 1000)

                for (let i = 0; i < numberOfMessagesInt; i++) {
                    const message = await contractInstance.allMessages(i);

                    if (address[0] === (await signer.getAddress())) {
                        document.getElementById("addressOne").innerHTML =
                            address[1];

                        if (message.slice(-1) === "1") {
                            document.getElementById(
                                "message"
                            ).innerHTML += `<div id="messageTwo"  > ${message.slice(
                                0,
                                -1
                            )} </div>`;
                        } else {
                            document.getElementById(
                                "message"
                            ).innerHTML += `<div id="messageOne"  > ${message.slice(
                                0,
                                -1
                            )} </div>`;
                        }
                    } else if (address[1] === (await signer.getAddress())) {
                        document.getElementById("addressOne").innerHTML =
                            address[0];

                        if (message.slice(-1) === "2") {
                            document.getElementById(
                                "message"
                            ).innerHTML += `<div id="messageTwo"  > ${message.slice(
                                0,
                                -1
                            )} </div>`;
                        } else {
                            document.getElementById(
                                "message"
                            ).innerHTML += `<div id="messageOne"  > ${message.slice(
                                0,
                                -1
                            )} </div>`;
                        }
                    }

                    // console.log(message);
                }
            } catch (error) {
                document.getElementById("errorMsg").innerHTML =
                    "Your chat address is wrong please check your chat address";
                console.log("catchError");
                document.getElementById("afterContent").style.display = "none"

                console.log(error);
            }
        } else {
            document.getElementById("errorMsg").innerHTML =
                "please write the correct Chat Address  ";

            // console.log(
            //     "this is the error message which present at end of statement"
            // );
        }
    };

    const send = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();

        //  console.log(await signer.getAddress())

        // console.log(Instance)

        const message = document.getElementById("messageInput").value;

        await Instance.messageInput(message);

         document.getElementById("messageInput").value = "" ; 
    };

    const checkUpdate = async () => {
        // console.log(MessageCount)
        // const ins = await
        const numberLength = await Instance.arrayMessageLength();

        const number = (await ethers.utils.formatEther(numberLength)) * 10e17;

        // if(MessageCount != number){

        console.log("interval");
        // console.log(ins)

        if (MessageCount !== number) {
            console.log("length is not match");

            await getData();

            //  clearInterval(checkUpdate())
        }

        // }
    };

    return (
        <>
            <div className=" bg-gradient-to-r from-blue-400 to-teal-200    w-full pt-16 m-0 pb-5 ">
                <div className="  m-12 sm:border-2 pt-6 p-4 sm:p-8 bg-white border-sky-50 bg-black/50 rounded-xl backdrop-blur text-white ">
                    <div className=" text-5xl capitalize text-red-100 font-semibold font-mono">
                        create chat box{" "}
                    </div>
                    <div></div>
                    <div className=" flex ">
                        <TextField
                            fullWidth
                            id="chatAddress"
                            label="Write Chat Address "
                            variant="filled"
                            type="text"
                            className=" bg-white/70 "
                        />
                        <Button
                            variant="contained"
                            size="large"
                            onClick={getData}
                        >
                            {" "}
                            Read{" "}
                        </Button>
                    </div>
                    <div id="errorMsg"></div>

                    <div id="afterContent" className=" hidden">
                    <div>Please write message carefully because after you sen the message no one can delete it </div>
                        <div
                            id="addresses"
                            className="  text-white md:flex relative mb-2"
                        >
                            <div className="bg-blue-200 text-blue-700   p-2 mt-4 rounded-md inline-block  border-2 border-blue-500">
                                <span className=" text-xs font-light font-serif ">
                                    Second Person Address
                                </span>
                                <div id="addressOne" className=" text-sm"></div>
                            </div>
                            <div className="bg-blue-700 text-blue-200 border-blue-500 p-2 mt-4 rounded-md  absolute right-0 border-2 ">
                                <span className=" text-xs font-light font-serif ">
                                    Chat Address
                                </span>
                                <div id="addressTwo" className=" text-sm"></div>
                            </div>
                        </div>
                        <div
                            id="message"
                            className=" mt-20 md:mt-2 flex flex-col "
                        ></div>
                        <div className=" flex mt-2">
                            <TextField
                                fullWidth
                                id="messageInput"
                                label="Write message "
                                variant="filled"
                                type="text"
                                className=" bg-white/70 "
                            />
                            <Button
                                variant="contained"
                                size="large"
                                onClick={send}
                            >
                                {" "}
                                send{" "}
                            </Button>
                        </div>
                        <div>
                            {" "}
                            after you recieve transaction confirmed message from
                            metemask then simpaly click on refresh
                        </div>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={checkUpdate}
                        >
                            Refresh
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JoinChat;
