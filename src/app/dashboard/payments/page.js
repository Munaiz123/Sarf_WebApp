
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../../UserAuth"

function PaymentsDashboard() {

    return (
      <div className="px-10">
        <main>
          <h1>Payments</h1>
        </main>
      </div>
    )
  }

export default withAuth(PaymentsDashboard)