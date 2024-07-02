
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../UserAuth"

function Dashboard() {

    return (
        <div className="px-20 md:px-40">
            <h1>Dashboard</h1>
      </div>
    )
  }

export default withAuth(Dashboard)
