import Link from "next/link"

export default function NavBar() {
    return(
        <div className="bg-gray-950 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between">
        <nav className="flex items-center gap-6">
          <Link className="font-bold text-lg" href="#"> SARF </Link>
          <Link className="text-sm hover:underline scroll-smooth" href="#"> About</Link>
          <Link className="text-sm hover:underline scroll-smooth" href="#"> Contact </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="text-sm font-medium hover:underline" href="#"> Login </Link>
          <Link
            className="inline-flex h-8 items-center justify-center rounded-md bg-gray-50 px-4 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            href="#">
            Sign Up
          </Link>
        </div>
      </div>
    )

}