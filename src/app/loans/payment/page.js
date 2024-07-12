"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

import { useRouter, useSearchParams } from 'next/navigation';

import withAuth from "../../UserAuth"
import PaymentModal from './PaymentModal'
import Link from "next/link"

import { contacts } from '../../constants';

const OneTimePaymentPage = () => {  
  const router = useRouter()
  const searchParams = useSearchParams()

  const [searchTerm, setSearchTerm] = useState('')
  const [renderModal, setRenderModal] = useState(false)
  const [contactOnModal, setContactOnModal] = useState(null)


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onClickContact = (event) =>{
    setContactOnModal(JSON.parse(event.target.getAttribute('contact')))
    setRenderModal(true)
  }
  
  return (
    <main>
        <div className="bg-black text-white p-6">
            <h1 className="text-2xl font-bold mb-6">One-Time Payment</h1>

        <div className="mb-6">
            <Search className=" mt-3 ml-2 absolute text-gray-500" />
            <input
                type="text"
                placeholder="Search name, username, or email"
                className="w-full bg-gray-800 rounded-full py-3 px-5 pl-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <h2 className="text-xl font-semibold mb-4">Contacts</h2>
        <div className="space-y-4">
            {filteredContacts.map(contact => (
            <div key={contact.id} className="flex items-center space-x-4 bg-gray-800 rounded-xl p-4">
                {/* <img src="/api/placeholder/48/48" alt={contact.name} className="w-12 h-12 rounded-full" /> */}
                <div>
                    <p className="font-semibold">{contact.name}</p>
                    <p className="text-sm text-gray-400">{contact.email}</p>
                    <button contact={JSON.stringify(contact)} onClick={onClickContact}>Send Payment</button>
                </div>
            </div>
            ))}
        </div>
        </div>
        
        <PaymentModal openModal={renderModal} contactDetails={contactOnModal} setRenderModal={setRenderModal} />

    </main>
  );
};

export default withAuth(OneTimePaymentPage);
// export default OneTimePaymentPage;