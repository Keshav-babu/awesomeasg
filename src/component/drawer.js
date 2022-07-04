import {Drawer,DrawerBody,DrawerFooter,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,useDisclosure,Box,Input,} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import React, { useState } from "react"
// import Axios from "axios"

export const DrawerExample=({img,price})=> {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [emailverify,setEmailVerify]=useState(false);
//   const [city,setCity]=useState(user.city||"")
//   const [country,setCountry]=useState(user.country||"")
    
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
 // console.log("user",user)
  const updateData=(id)=>{


    //   const data={
    //     name,age,city,country,
    //     _id:id
    //   }
    //   console.log(data,id)
    //   Axios.post("https://crudappinmernstack.herokuapp.com/update",data)
    //   .then((res)=>{
    //     console.log(res)
    //     window.location.reload()
    //   })
    }
 const validateEmail = (email) => {
    let status=String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(status){
        setEmailVerify(true)
        alert("Valid Email")
    }else{
         alert("Email is not valid")
    }
    
 
};
  return (
    <>
      <button ref={btnRef} colorscheme={'blue'} onClick={onOpen}>
        Buy Now
      </button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Buy</DrawerHeader>

          <DrawerBody>
            <img src={img} />
            <p>{price}</p>
            <Box w='100%' color='' border="1px solid green"  >
                

                Name:<Input value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
                Email:<Input value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
                <Button onClick={()=>{
                    validateEmail(email)
                    
                }
                   
                }>Verify Email</Button>
                {emailverify?<p>verified</p>:<h6>not verify</h6>}
             
        </Box>

          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose }>Cancel</Button>
            <Button colorscheme='blue' onClick={()=>updateData()}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}