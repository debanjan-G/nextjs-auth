import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='bg-slate-200 text-black flex items-center p-4 justify-around text-2xl font-bold'>
            <Link href='/ ' className='hover:text-green-600'>Home</Link>
            <Link href='/secret ' className='hover:text-green-600'>Dashboard</Link>

        </div>
    )
}

export default NavBar
