
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../../UserAuth"

function WalletDashboard() {

    return (
        <main>
          <h1>My Wallet</h1>
        </main>
    )
  }

export default withAuth(WalletDashboard)