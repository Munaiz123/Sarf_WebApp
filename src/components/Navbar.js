"use client"

import Link from "next/link"
import React,{useState, useEffect} from "react"

import Sidebar from './Sidebar'
import { useUser } from '../app/UserContext'
import { MenuIcon } from "./Icons"

export default function NavBar() {
  const {user, logout} = useUser()

  useEffect(()=>{
    if(user.loggedIn) setIsLoggedIn(true)
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onClickLogout = () =>{
    logout()
    setIsLoggedIn(false)
  }

  return(   
      <nav className="p-4 flex items-center justify-between flex items-center gap-6">
      
      {isLoggedIn && <Sidebar />}
      { !isLoggedIn ?  <div>
          <Link className="font-bold text-lg" href="/"> SARF </Link>
          {/* <Link className="text-sm hover:underline scroll-smooth" href="#"> About</Link> */}
          {/* <Link className="text-sm hover:underline scroll-smooth" href="#"> Contact </Link> */}
      </div> : <div></div>}
        
          
      <div className="flex items-center gap-4"> 
        <h6> Coming Soon! </h6>
        {/** Uncomment below lines 38-43 for development */}
      {/* {isLoggedIn ? <button className="text-md font-medium hover:underline" onClick={onClickLogout}> Logout </button> :
        <React.Fragment >
          <Link className="text-sm font-medium hover:underline" href="/login"> Login </Link>
          <Link className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" 
            href="/signup"> Sign Up </Link>
        </React.Fragment>} */}
      </div>
      </nav>
    )
}

