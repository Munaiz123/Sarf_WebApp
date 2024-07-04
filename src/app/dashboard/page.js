
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../UserAuth"

function Dashboard() {

    return (
      <div className="px-10">
        <main>
          <h1>Dashboard</h1>
        </main>
      </div>
    )
  }

export default withAuth(Dashboard)