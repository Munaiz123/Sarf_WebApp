
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../../UserAuth"

function WalletDashboard() {

    return (
      <div className="px-10">
        <main>
          <h1>My Wallet</h1>
        </main>
      </div>
    )
  }

export default withAuth(WalletDashboard)