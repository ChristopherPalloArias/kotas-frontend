"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen">
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'font-bold' : ''}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/users/UserList" className={pathname === '/users/UserList' ? 'font-bold' : ''}>
              Users
            </Link>
          </li>
          <li>
            <Link href="/users/AddUser" className={pathname === '/users/AddUser' ? 'font-bold' : ''}>
              Add User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
