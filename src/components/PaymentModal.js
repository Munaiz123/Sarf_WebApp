'use client'

import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'

const  PaymentModal = ({openModal, contactDetails, setRenderModal, paymentType}) => {
  const [open, setOpen] = useState(false)
  const [amount, setAmount] = useState("");

  useEffect(()=>{
    setOpen(openModal)
  })

  const formatDollarAmount = (value) => {
    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, '');
    
    // Handle empty input
    if (digitsOnly === '') {
      setAmount('');
      return;
    }
    
    // Convert to a number and divide by 100 to get decimal places
    const numberValue = parseFloat(digitsOnly) / 100;
    
    // Format the number with commas and two decimal places
    const formattedValue = numberValue.toLocaleString('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    
    setAmount(formattedValue);
  };

  const handleAmountInputChange = (e) => {
    formatDollarAmount(e.target.value);
  };
  
  return (
    <Dialog open={open} onClose={()=> setRenderModal(false)} className="relative">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-40 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <DialogTitle className="text-4xl text-center text-amber-400 center font-bold mb-4">{contactDetails?.name}</DialogTitle>
                <div className="m-2">
                    {paymentType === 'Send' ? <p className="text-sm text-center text-gray-500">Enter how amount you wish to pay back</p>
                    : <p className="text-sm text-center text-gray-500">Enter how amount you wish to request from barrower</p>}
                </div>

                <div className="text-center m-10 flex" >
                    <span className="text-4xl font-bold">$</span>
                    <input
                        type='text'
                        placeholder='Enter Amount'
                        value={amount}
                        onChange={handleAmountInputChange}
                        className="text-4xl text-white font-bold bg-transparent border-b border-white focus:outline-none focus:border-yellow-500 w-full text-center"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4 m-10">
                {paymentType === 'Send' ? <button className="flex-1 bg-yellow-500 text-black py-2 px-4 rounded-full"> Pay </button> 
                : <button className="flex-1 bg-yellow-500 text-black py-2 px-4 rounded-full"> Request </button> }
            </div>
           
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default PaymentModal;



{/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                Deactivate
                </button>
                <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                Cancel
                </button>
                </div> */}