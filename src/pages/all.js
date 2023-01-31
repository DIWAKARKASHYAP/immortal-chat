import React from 'react'
import Button from '@mui/material/Button';


function All() {
  return (
    <>
          <div className="  bg-[url('https://wallpapers.com/images/hd/luminous-red-anonymous-2wrm4j7avzuqqm4d.jpg')] bg-no-repeat bg-cover h-screen w-full pt-16 pb-1">
        <div className="  m-12  flex flex-wrap items-center justify-center">

    <div className=' p-10'>               
     <Button variant="contained"  size="large" href='/createchat' > Create Chat Box </Button>
</div>
    <div className=' p-10'>               
     <Button variant="contained"   size="large" href='/JoinChat' > Join chat </Button>
</div>    <div className=' p-10'>               
     <Button variant="contained"  size="large" href='/ReadChat' > read chat </Button>
</div>
</div></div>
    </>
  )
}

export default All