
import Link from "next/link"
import React from "react";
import {FRIENDS_FAMILY_LOANS_DESC, AUTOMATED_SYSTEM_DESC, FINANCIAL_WELLNESS_DESC} from "../app/constants"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-[100dvh] my-10">
      <main className="flex-1 snap-y snap-mandatory overflow-y-scroll">
        <section className="flex items-center justify-center md:px-6 px-4 h-[80dvh] mb-10 md:mb-30">
          <div className="space-y-8 text-center max-w-[700xpx]">
            {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Automated + Interest Free Loans</h1> */}
            <h1 className="text-2xl font-bold text-center tracking-tighter lg:text-4xl 2xl:text-5xl px-4 mb-10">Financial Wellness For All</h1>
            {/* <div> <h2 className="md:text-xl/relaxed">Financial Wellness For All</h2></div> */}
            <h4 className="font-bold text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl px-4 mb-10">Automated + Interest Free Loans</h4>
          </div>
        </section>
        <section
          className="flex items-center justify-center px-4 md:px-6 py-12 h-[60dvh] snap-start scroll-mt-16"
          id="about">
          <div className="container">
            {/* <h2 className="text-2xl font-bold mb-8">About</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <UserGroupIcon className="h-12 w-12 mx-auto" />
                {/* <h3 className="text-2xl font-bold">Innovative Solutions</h3> */}
                <p className="md:text-xl/relaxed">{FRIENDS_FAMILY_LOANS_DESC}</p>
              </div>
              <div className="space-y-4">
                <BankNotes className="h-12 w-12 mx-auto" />
                {/* <h3 className="text-2xl font-bold">Unparalleled Performance</h3> */}
                <p className="md:text-xl/relaxed">{FINANCIAL_WELLNESS_DESC}</p>
              </div>
              <div className="space-y-4">
                <CheckIcon className="h-12 w-12 mx-auto" />
                {/* <h3 className="text-2xl font-bold">Dedicated Support</h3> */}
                <p className="md:text-xl/relaxed">{AUTOMATED_SYSTEM_DESC}</p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="flex items-center justify-center bg-gray-950 text-gray-50 px-4 md:px-6 py-12 h-[50dvh] snap-start scroll-mt-16"
          id="contact">
          <div className="space-y-8 text-center max-w-[600px]">
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="md:text-xl/relaxed">
              Get in touch with us to learn more about our services and how we can help you succeed online.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                href="#">
                <MailIcon className="h-5 w-5" />
                info@sarf.com
              </Link>
              <Link
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                href="#">
                <PhoneIcon className="h-5 w-5" />
                +1 (234) 567-890
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BankNotes(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      color="gold"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      <circle cx="12" cy="12" r="4" />
    </svg>)
  );
}
function UserGroupIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      color="gold"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      color="gold"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>)
  );
}



function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      color="gold"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color="gold"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}





// https://docs.google.com/forms/d/e/1FAIpQLScTzaS0z9TKD29BK4Crxmzw87wR4KvI65edT56qzisTUO7zkg/viewform