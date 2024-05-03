'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { IUser } from '@/types/IUser'

type Props = {}

export default function page({}: Props) {
    const router =useRouter()
    const [firstName, setFristname] = useState <string> ("")
    const [lastName, setLastname] = useState <string> ("")
    const [phoneNumber , setPhoneNumber] = useState <string> ("")
    const [email , setEmail] = useState <string> ("")

    const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault
        const data : IUser = {
            firstName,
            lastName,
            phoneNumber,
            email
        }

        const response = await axios.post("https://663489e99bb0df2359a1d0af.mockapi.io/api/v1/users")
        if(response.status === 201) {
            alert ("Add user success")
            router.push
        } else {
            alert("Add user failed")
        }
    }
    return (

    <>
    <h1>Add user</h1>
    <form>
    <label>Frist name :</label>
    <input type="text" name="fristName" required onChange={(e) => {setFristname(e.target.value)}} value={'fristName'}/>
    <br />
    <label>Last name :</label>
    <input type="text" name="lastName" required onChange={(e) => {setLastname(e.target.value)}} value={'lastName'}/>
    <br />
    <label>Phone number : setPhoneNumber :</label>
    <input type="text" name="Phone number" required onChange={(e) => {setPhoneNumber(e.target.value)}} value={'phonenumber'}/>
    <br />
    <label>email:  setPhoneNumber :</label>
    <input type="text" name="email" required onChange={(e) => {setEmail(e.target.value)}} value={'email'}/>
    <button type="submit" onClick={handleAdd}>Add</button>
    </form>
    
    
    
    </>
   
  )
}