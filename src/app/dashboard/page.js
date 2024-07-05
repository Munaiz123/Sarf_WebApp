
"use client"
import Link from "next/link"
import React from "react"
import withAuth from "../UserAuth"

const Dashboard = () => {
  const upcomingPayments = [
    { id: 1, name: 'Jason Bourne', amount: 300 },
    { id: 2, name: 'John Wick', amount: 300 },
    { id: 3, name: 'The Ghost', amount: 300 },
  ];

  const recentActivity = [
    { id: 1, name: 'Naruto', message: 'Thanks for your help!', amount: 300, type: 'credit' },
    { id: 2, name: 'Light Yagami', message: 'Thanks for your help!', amount: 300, type: 'debit' },
    { id: 3, name: 'Edward Elric', message: 'Thanks for your help!', amount: 300, type: 'credit' },
  ];

  return (
    <main >
        <div className="bg-black text-white p-4 min-h-screen">
            {/* <div className="flex justify-between items-center mb-6">
                <img src="/api/placeholder/48/48" alt="Profile" className="w-12 h-12 rounded-full" />
                <Bell className="text-white" />
            </div> */}

            <h1 className="bg-gradient-to-r from-white to-amber-400 inline-block text-transparent bg-clip-text text-3xl font-bold mb-4">Overview</h1>

            <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg p-4 mb-6">
                <p className="text-sm">Available Balance</p>
                <p className="text-4xl font-bold">$10,000.00</p>
            </div>

            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Upcoming Payments</h2>
                <a href="#" className="text-amber-500 text-sm">View All</a>
                </div>
                <div className="flex space-x-4 overflow-x-auto">
                {upcomingPayments.map((payment) => (
                    <div key={payment.id} className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg p-4 flex-shrink-0 w-32">
                    {/* <img src="/api/placeholder/48/48" alt={payment.name} className="w-12 h-12 rounded-full mb-2" /> */}
                    <p className="text-black text-sm">{payment.name}</p>
                    <p className="text-black font-bold">${payment.amount}</p>
                    </div>
                ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
                <div className="space-y-2">
                {recentActivity.map((activity) => (
                    <div key={activity.id} className="bg-gray-800 rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                        {/* <img src="/api/placeholder/48/48" alt={activity.name} className="w-12 h-12 rounded-full mr-4" /> */}
                        <div>
                        <p className="font-semibold">{activity.name}</p>
                        <p className="text-sm text-gray-400">{activity.message}</p>
                        </div>
                    </div>
                    <p className={`font-bold ${activity.type === 'credit' ? 'text-green-500' : 'text-red-500'}`}>
                        {activity.type === 'credit' ? '+' : '-'}${activity.amount}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </main>
  );
};

// export default withAuth(Dashboard)
export default Dashboard