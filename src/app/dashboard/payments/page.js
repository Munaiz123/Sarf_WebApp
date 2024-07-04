
"use client"
import Link from "next/link"
import React from "react"

import withAuth from "../../UserAuth"

function PaymentsDashboard() {

    return (
        <main>
          <h1>Payments</h1>
        </main>
    )
  }

export default withAuth(PaymentsDashboard)