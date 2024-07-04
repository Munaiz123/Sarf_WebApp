
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../UserAuth"

function Dashboard() {

    return (
      <main>
        <h1>Dashboard</h1>
      </main>
    )
  }

export default withAuth(Dashboard)