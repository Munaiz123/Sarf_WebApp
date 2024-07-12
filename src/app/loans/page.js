
"use client"
import React, { useState } from 'react';
import { Bell, Send, RotateCcw, ChevronRight, DollarSign } from 'lucide-react';

import Link from "next/link"
import withAuth from "../UserAuth"


const LoansPage = () => {

  const youOweLoans = [
    { id: 1, name: 'Jason Bourne', status: 'Active Loan', amount: 300, description: 'Helping With Rent' },
    { id: 2, name: 'John Wick', status: 'Pending Loan', amount: 500, description: 'Home Renovations' },
    { id: 3, name: 'Baba Yaga', status: 'Pending Loan', amount: 1000, description: 'Home Renovations' },
  ];

  return (
    <main>
      <div className="bg-black text-white min-h-screen p-6">
        {/* <div className="flex justify-end mb-6">
          <Bell className="text-amber-500 w-6 h-6" />
        </div> */}
        <h1 className="bg-gradient-to-r from-white to-amber-400 inline-block text-transparent bg-clip-text text-3xl font-bold mb-4">Loans</h1>

        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-6 mb-8">
          <p className="text-4xl font-bold mb-2 text-red-500"> 2,300.00 </p>
          <p className="text-sm"> Total Amount You Owe </p>
        </div>

        <div className="flex space-x-4 mb-8">
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center">
            <Link href="/loans/payment?freq=once">Send Single Payment</Link> 
          </button>
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center">
            Set Recurring Payment
          </button>
        </div>


        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-amber-500 flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4">
            {youOweLoans.map((loan) => (
              <div key={loan.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center">
                  {/* <img src="/api/placeholder/48/48" alt={loan.name} className="w-12 h-12 rounded-full mr-4" /> */}
                  <div>
                    <p className="font-semibold text-amber-500">
                      {loan.name} <span className="text-green-500 text-sm ml-2">{loan.status}</span>
                    </p>
                    <p className="text-sm text-gray-400">"{loan.description}"</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-500">${loan.amount}</p>
                  <p className="text-sm text-red-500"> Owed </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Past Loans</h3>
            <a href="#" className="text-amber-500 flex items-center"> View All <ChevronRight className="w-4 h-4 ml-1" /> </a>
          </div>
        </div>
      </div>
    </main>
  );
};

// export default withAuth(LoansPage);
export default LoansPage;