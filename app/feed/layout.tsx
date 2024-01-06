import type { Metadata } from 'next';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home',
};

const pacifico = Permanent_Marker({ subsets: ['latin'], weight: '400' });

const NavBar = () => {
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white">
      <div className="container mx-auto flex max-w-screen-xl flex-wrap items-center p-4">
        <h3
          className={`${pacifico.className} text-4xl text-slate-700 antialiased`}
        >
          Social
        </h3>

        <ul className="ml-72 flex border-2">
          <li>
            <Link
              href="/feed"
              className="block px-3 py-2 text-slate-800 "
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/feed/profile"
              className="block px-3 py-2 text-slate-800 "
              aria-current="page"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/feed/cities"
              className="block px-3 py-2 text-slate-800 "
              aria-current="page"
            >
              Cities
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
