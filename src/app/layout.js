import Navbar from "../components/Navbar"
import { UserProvider} from './UserContext'
import { Inter } from "next/font/google";
// import "./globals.css";
import "../../public/index.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SARF 2.0",
  description: "Financial Wellness for Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <UserProvider>
        <Navbar />
        {children}
      </UserProvider>
      </body>
    </html>
  );
}
