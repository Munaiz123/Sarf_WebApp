
"use client"
import React, { useState } from 'react';
import { Bell, Send, RotateCcw, ChevronRight, DollarSign } from 'lucide-react';

import Link from "next/link"
import withAuth from "../UserAuth"


const RequestPage = () => {

  const owedToYouLoans = [
    { id: 1, name: 'alex smith', status: 'Active Loan', amount: 200, description: 'Car Repair' },
    { id: 2, name: 'chris doe', status: 'Completed', amount: 150, description: 'Dinner Expense' },
  ];

  return (
    <main>
      <div className="bg-black text-white min-h-screen p-6">
        {/* <div className="flex justify-end mb-6">
          <Bell className="text-amber-500 w-6 h-6" />
        </div> */}
        <h1 className="bg-gradient-to-r from-white to-amber-400 inline-block text-transparent bg-clip-text text-3xl font-bold mb-4">Requests</h1>

        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-6 mb-8">
          <p className="text-4xl font-bold mb-2 text-green-500">
            350
          </p>
          <p className="text-sm"> Total Amount Owed to You </p>
        </div>

        <div className="flex space-x-4 mb-8">
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center"> Request Single Payment </button>
          <button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center"> Request Reocurring Payment </button>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <a href="#" className="text-amber-500 flex items-center">
              View All
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          <div className="space-y-4">
            {owedToYouLoans.map((loan) => (
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
                  <p className="font-bold text-green-500">${loan.amount}</p>
                  <p className="text-sm text-green-500"> Owed to You </p>
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

// export default withAuth(RequestPage);
export default RequestPage;