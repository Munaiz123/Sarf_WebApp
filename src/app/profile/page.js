"use client"
import React from 'react';
import { Bell, Settings, Landmark } from 'lucide-react';
import Link from 'next/link'

import withAuth from '../UserAuth';

const FinancialDashboard = () => {
  return (
    <main>
        <div className="flex flex-col min-h-screen bg-black text-white p-4">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <Bell className="text-white" size={24} />
                <h1 className="text-xl font-bold">Tanjiro Kamado</h1>
                <Link href="/profile/edit">
                    <Settings className="text-white" size={24} />
                </Link>
            </header>

            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                <img
                    src="https://images.app.goo.gl/b47rgwHUgP9ydeW86"
                    alt="Profile"
                    className="w-30 h-30 rounded-full"
                />
                <div className="absolute top-0 right-0 w-4 h-4 bg-white rounded-full border-2 border-black"></div>
                </div>
            </div>

            {/* Account Balance */}
            <div className="bg-black rounded-lg p-4 mb-6">
                <h2 className="text-lg mb-2">Account Balance</h2>
                <p className="text-3xl font-bold mb-4">$10,000.00</p>
                <div className="flex space-x-4">
                <button className="flex-1 bg-yellow-500 text-black py-2 px-4 rounded-full">
                    Transfer
                </button>
                <button className="flex-1 bg-yellow-500 text-black py-2 px-4 rounded-full">
                    Add Money
                </button>
                </div>
            </div>

            {/* Banks */}
            <div className="mb-6">
                <h2 className="text-lg mb-2">Banks</h2>
                <div className="flex space-x-4">
                <div className="w-32 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
                    {/* <div className="w-8 h-8 bg-yellow-500 rounded-full"></div> */}
                    <Landmark className='text-black'/>
                </div>
                <div className="w-32 h-32 bg-yellow-300 rounded-lg flex items-center justify-center">
                    {/* <div className="w-8 h-8 bg-yellow-500 rounded-full"></div> */}
                    <Landmark className='text-black'/>
                </div>
                </div>
            </div>
        </div>
    </main>
  );
};

export default withAuth(FinancialDashboard);
// export default FinancialDashboard