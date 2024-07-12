
"use client"
import Link from "next/link"
import React from "react"
import withAuth from "../UserAuth"
import { Bell, Plus, ChevronRight } from 'lucide-react';

function ContractsDasboard() {
  const activeContracts = [
    { id: 3, name: 'Michael from Jordan', description: 'New Kicks' },
    { id: 3, name: 'Lebenon James', description: 'Not the goat' },
  ];

    return (
        <main>
          <div className="bg-black text-white min-h-screen p-6">
            {/* <div className="flex justify-between items-center mb-6">
              <Bell className="text-amber-500 w-6 h-6" />
            </div> */}
              <h1 className="bg-gradient-to-r from-white to-amber-400 inline-block bg-clip-text text-transparent text-2xl font-bold">Contracts</h1>

            <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl p-6 mb-8">
              {/* <h2 className="text-xl mb-2">Contracts</h2> */}
              <p className="text-4xl font-bold mb-2">{activeContracts.length}</p>
              <p className="text-sm">Total Active Contracts</p>
            </div>

            <button className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold py-3 px-4 rounded-full flex items-center justify-center mb-8">
              <Plus className="w-5 h-5 mr-2" />
              New Contract
            </button>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Active Contracts</h3>
                <a href="#" className="text-amber-500 flex items-center">
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="space-y-4">
                {activeContracts.map((contract) => (
                  <div key={contract.id} className="bg-gray-800 rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {/* <img src="/api/placeholder/48/48" alt={contract.name} className="w-12 h-12 rounded-full mr-4" /> */}
                      <div>
                        <p className="font-semibold text-amber-500">{contract.name}</p>
                        <p className="text-sm text-gray-400">{contract.description}</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400 w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
    )
  }

export default withAuth(ContractsDasboard)
// export default ContractsDasboard