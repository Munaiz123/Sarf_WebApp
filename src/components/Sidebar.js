"use client"

import { useState } from "react"
import {HomeIcon, DollarSignIcon, WalletIcon , PaperclipIcon, MenuIcon} from '../components/Icons'
import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Component() {
  const router = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)
  return (
      <div>
        <button>
          <MenuIcon onClick={()=> setShowSidebar(!showSidebar)} className="lg:hidden xl:hidden" />
        </button>
        <div onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => !isPinned && setIsExpanded(false)}
          className={`lg:visible xl:visible fixed top-0 left-0 bottom-0 rounded-xl bg-amber-400 p-4 flex flex-col justify-around items-center transition-all duration-300 
            ${isExpanded ? "w-28" : "w-16"}
            ${isPinned ? "static" : "fixed"}
            ${showSidebar ? "" : "invisible"}`}
        >
          <button onClick={()=> setShowSidebar(!showSidebar)} className="lg:hidden xl:hidden w-8 h-8 text-black">
            <MenuIcon />
          </button>

          <Link href="/dashboard">
            <HomeIcon onClick={()=> setShowSidebar(!showSidebar)} className="w-8 h-8" />
          </Link>
          <Link href="/dashboard/loans">
            <DollarSignIcon onClick={()=> setShowSidebar(!showSidebar)} className="w-8 h-8" />
          </Link>
          
          <Link href="/dashboard/wallet">
            <WalletIcon onClick={()=> setShowSidebar(!showSidebar)} className="w-8 h-8" />
          </Link>

          <div className="flex items-center gap-2">
            {isExpanded && (
              <button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsPinned(!isPinned)}>
                <PaperclipIcon className="w-5 h-5 text-black" />
                <span className="sr-only">{isPinned ? "Unpin" : "Pin"} sidebar</span>
              </button>
            )}
          </div>
        </div>
      </div>
  )
}



  {/* <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar> */}