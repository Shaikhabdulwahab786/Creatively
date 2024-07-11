"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'

const MobileNav = () => {
    const pathnaem = usePathname();
    return (
        <header className='header'>
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28} />
            </Link>
            <nav className="flex gap-2" >
                <SignedIn>
                    <UserButton />
                    <Sheet>
                        <SheetTrigger>
                            <Image src="/assets/icons/menu.svg" alt='menu' width={32} height={32} className=" cursor-pointer"/>
                        </SheetTrigger>
                        <SheetContent>
                        <Image src="/assets/images/logo-text.svg" alt='logo' width={152} height={23} />
                        <ul className='header-nav_elements'>
                        {navLinks.map((link) => {
                            const isactive = link.route === pathnaem;
                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isactive &&"gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}>
                                 <Link className='sidebar-link cursor-pointer' href={link.route}>
                                 <Image src={link.icon}  alt='logo' width={24} height={24} />
                                 {link.label}
                                 </Link>
                                </li>)
                        })}
                        </ul>
                        </SheetContent>
                    </Sheet>

                </SignedIn>

            </nav>

        </header>
    )
}

export default MobileNav