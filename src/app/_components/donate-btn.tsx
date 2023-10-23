'use client'

import { useRouter } from "next/navigation"

export const DonateBtn = () =>{
    const router = useRouter();
    return <button onClick={()=>router.push('/donate')} className="bg-green-500 text-white px-10 py-3 rounded font-semibold mt-5 hover:bg-transparent hover:text-green-500 border-2 border-green-500 ">
    Donate
  </button>
}