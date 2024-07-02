"use client"

import { useState } from "react"
import {HomeIcon, DollarSignIcon, WalletIcon , PaperclipIcon} from '../components/Icons'

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isPinned, setIsPinned] = useState(false)
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 rounded-xl bg-amber-400 p-4 flex flex-col justify-around items-center transition-all duration-300 ${
        isExpanded ? "w-32" : "w-16"
      } ${isPinned ? "static" : "fixed"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => !isPinned && setIsExpanded(false)}
    >
      <button>
        <HomeIcon className="w-8 h-8" />
      </button>
      <button>
        <DollarSignIcon className="w-8 h-8" />
      </button>
      <button>
        <WalletIcon className="w-8 h-8" />
      </button>
      <div className="flex items-center gap-2">
        {/* <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar> */}
        {isExpanded && (
          <button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsPinned(!isPinned)}>
            <PaperclipIcon className="w-5 h-5 text-yellow-500" />
            <span className="sr-only">{isPinned ? "Unpin" : "Pin"} sidebar</span>
          </button>
        )}
      </div>
    </div>
  )
}

