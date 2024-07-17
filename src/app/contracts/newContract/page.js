import React from 'react';

const LoanRequestForm = () => {
  return (
    < main>
        <div className="mx-auto">
        <h1 className="text-xl font-semibold mb-4" >New Loan Request</h1>

        <div className="mb-4">
            <label className="mb-2">Title</label>
            <input
            type='text' 
            placeholder='Enter Title'
            className="w-full bg-gray-800 rounded-lg py-3 p-5 pl-12 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
        </div>

        <div className="">
            <label className="mb-2">Duration</label>
            <div className='flex'>
                <input
                    type="number"
                    placeholder='0'
                    className="w-full bg-gray-800 text-white rounded-lg p-3 mr-2 placeholder-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <select className="w-full bg-gray-800 text-white rounded-lg p-3 ml-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option>Select a temporal</option>
                    <option>Months</option>
                    <option>Years</option>
                </select>
            </div>
           
        </div>
        
        <div className="mb-4">
            <label className="mb-2">Description</label>
            <textarea 
            className="w-full bg-gray-800 text-white rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-amber-400 "
            />
        </div>
        
        <div className="mb-4">
            <label className="mb-2">Lender</label>
            <select className="w-full bg-gray-800 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option>Select a lender</option>
                {/* Add more options as needed */}
            </select>
            </div>
        </div>
    </main>
  );
};

export default LoanRequestForm;
