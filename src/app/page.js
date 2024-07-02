
import React from "react";
import Link from "next/link"

import {FRIENDS_FAMILY_LOANS_DESC, AUTOMATED_SYSTEM_DESC, FINANCIAL_WELLNESS_DESC} from "../app/constants"
import { BankNotes, UserGroupIcon, CheckIcon, MailIcon, PhoneIcon} from "../components/Icons";

export default () => {
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