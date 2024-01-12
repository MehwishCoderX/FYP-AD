'use client'
// Import the necessary libraries
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {  useRouter , usePathname  } from "next/navigation"
import {  Router  } from "next/router";
import { MenuIcon } from '@heroicons/react/solid';

// Define the navigation items
const navigationItems = ['Home', 'Magic Studio', 'Projects', 'Templates', 'Brand', 'Apps', 'Create a team', 'Trash'];

 function Projects() {
  const router = useRouter();
  const [selected, setSelected] = useState('');

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Your App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">Your App</h2>
          <p className="mt-1 text-gray-600">Welcome to your application.</p>
        </div>
        <nav>
          {navigationItems.map((item) => (
            <Link href={`/${item.toLowerCase()}`} key={item}  className={`block py-2.5 px-4 rounded transition duration-200 ${router.pathname === `/${item.toLowerCase()}` ? 'bg-blue-500 text-white' : 'text-gray-500 hover:bg-blue-500 hover:text-white'}`}
            onClick={() => setSelected(item)}>
              
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
                {item}
              
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 text-2xl font-bold">
        content goes here
      </div>
    </div>
  );
}
export default Projects;    