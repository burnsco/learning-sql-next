'use client';

import { cn } from '@/lib/utils';
import { Permanent_Marker } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pacifico = Permanent_Marker({ subsets: ['latin'], weight: '400' });

const routes = [
  {
    label: 'Home',
    href: '/feed',
  },
  {
    label: 'Profile',
    href: '/feed/profile',
  },
  {
    label: 'Cities',
    href: '/feed/cities',
  },
  {
    label: 'Trees',
    href: '/feed/trees',
  },
  {
    label: 'Hordes',
    href: '/feed/hordes',
  },
  {
    label: 'Chat',
    href: '/feed/chat',
  },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="fixed start-0 top-0 z-20 h-16 w-full border-b border-gray-200 bg-white">
      <div className="flex max-w-screen-xl items-center p-2">
        <h3
          className={`${pacifico.className} text-4xl text-slate-700 antialiased`}
        >
          Social
        </h3>

        <menu className="mx-auto ml-5 flex border-2 border-blue-300">
          {routes.map((route) => (
            <li key={route.label}>
              <Link
                href={route.href}
                className={cn(
                  'block px-3 py-2 text-slate-800',
                  route.href === pathname && 'bg-slate-200/80',
                )}
                aria-current="page"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </menu>
      </div>
    </nav>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main className="flex min-h-full min-w-max bg-gray-50">{children}</main>
    </>
  );
}
