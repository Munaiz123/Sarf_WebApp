
import Link from "next/link"
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground"> Create an account</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
                    Or{" "} <Link href="/login" className="font-medium text-primary underline hover:text-primary/80" prefetch={false}> Login </Link>
            </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName"> First Name </label>
                    <input
                    id="firstName"
                    name="firstName"
                    type="firstName"
                    autoComplete="firstName"
                    required
                    className="relative block w-full rounded-md border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name </label>
                    <input
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    autoComplete="lastName"
                    required
                    className="relative block w-full rounded-md border border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className="relative block w-full rounded-md border border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="confirmPassword"
                    autoComplete="confirmPassword"
                    required
                    className="relative block w-full rounded-md border border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="userName"> Username </label>
                    <input
                    id="userName"
                    name="userName"
                    type="userName"
                    autoComplete="userName"
                    required
                    className="relative block w-full rounded-md border border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="dob"> Date of Birth </label>
                    <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="dob"
                    required
                    className="relative block w-full rounded-md border border-input px-3 py-2 focus:z-10 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <button type="submit" className="w-full inline-flex h-8 items-center justify-center bg-amber-400 text-gray-50 rounded-md text-lg font-medium "> Sign Up </button>
            </div>
        </form>
      </div>
    </div>
  )
}