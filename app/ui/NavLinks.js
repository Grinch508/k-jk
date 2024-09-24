'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"

export function NavLinks() {
    const pathname = usePathname()

    return(
        <nav>
          <Link href='http://localhost:3000' className={`link ${pathname === '/' ? 'active' : ''}`} >Home</Link>
          <Link href='http://localhost:3000/create-todo' className={`link ${pathname === '/create-todo' ? 'active' : ''}`} >Create Todo</Link>
        </nav>
    )
}