import React from 'react'
import DashBoardImage from "../../../public/Dashboard_Image.png"
import Image from 'next/image'
import { auth, signIn, signOut } from '@/auth'

const SecretPage = async () => {

    const session = await auth();



    return (
        <>
            {(session && session.user) ?
                <div className='flex flex-col h-screen justify-center items-center gap-8 text-slate-200'>
                    <h1 className="text-2xl font-extrabold my-4">Welcome back to your dashboard</h1>
                    <p className='text-5xl font-bold '>{session.user.name}</p>
                    <Image className='size-1/2 w-fit' src={DashBoardImage} alt='dashboard-image' />
                    <form action={async () => {
                        'use server'
                        await signOut()
                    }}>
                        <button className='p-3 bg-slate-100 text-slate-900 font-semibold'>Signout</button>
                    </form>
                </div> :
                <div className='flex items-center flex-col h-screen justify-center w-1/2 mx-auto'>
                    <p className='text-4xl text-red-600 font-bold text-center p-4'>You are not signed in. Please sign in to access your dashboard.</p>
                    <form action={async () => {
                        'use server'
                        await signIn()
                    }}>
                        <button className='px-6 p-3 bg-slate-100 text-slate-900 font-semibold'>Signin</button>
                    </form>
                </div>

            }
        </>

    )
}

export default SecretPage
