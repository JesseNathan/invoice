import React from 'react'

export default function App3() {
  return (
    <body className="min-h-screen bg-[url('/src/assets/image1.svg')] w-full bg-cover bg-no-repeat backdrop-brightness-[.2] ">

        {/* header */}
        <header className="w-full flex justify-between p-5">
                <div className="text-xl flex text-[#ffff] uppercase font-semibold text-shadow-lg">
                <img src="/src/assets/logo dsm 1.svg" alt="" className="size-24 " />
                    <div className="self-center flex space-x-12">
                    <a href="" className='hover:opacity-[.8]'>Dashboard</a> 
                      
                    <div className="relative group">
                        <a href="" className="inline-block hover:opacity-[.8]">crm sales</a>

                        {/* Bridge invisible */}
                        <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>

                        <div className="absolute left-0 top-10 hidden group-hover:block bg-black text-white rounded-lg shadow-lg w-max px-1 pb-1 capitalize z-10">
                            <div className="absolute bg-black rounded-full h-7 w-7 -top-2 left-7 z-0"></div>

                            <a href="" className="relative z-10 block px-4 py-3 hover:bg-gray-800 hover:rounded-lg mt-1">Daftar Klien</a>
                            <a href="" className="relative z-10 block px-4 py-3 hover:bg-gray-800 hover:rounded-lg mt-1">Interaksi Klien</a>
                            <a href="" className="relative z-10 block px-4 py-3 hover:bg-gray-800 hover:rounded-lg mt-1">Konfigurasi Email</a>
                        </div>
                    </div>

                    <a href="" className='hover:opacity-[.8]'>finance</a>
                    <a href="" className='hover:opacity-[.8]'>inventory</a>
                    </div>
                </div>

                {/* Profile Section*/}
                <div className='bg-white rounded-full w-10 h-10 self-center'></div>
        </header>
        
        {/* card */}
        <div className='relative z-10 px-5 mt-75'>

            <p className='uppercase text-white font-bold text-5xl'>deswa solusi <br /> multitama</p>

            <div className='grid grid-cols-4 mt-10  place-items-center'>
                <div className='w-80 h-max rounded-lg bg-gradient-to-l from-[#1F77B5] to-[#1e1e1f] transition-all duration-300 hover:from-[#3CAAF7] hover:to-[#2A2A2A] hover:shadow-lg hover:scale-105 cursor-pointer'>
                    <div className='text-white font-semibold flex gap-10 py-2 px-3 justify-around'>
                        <div className='self-center'>
                            <p className='text-5xl'>150</p>
                            <p className='text-lg'>Total Client</p>
                        </div>
                        <img src="src/assets/Vector.svg" className='opacity-[.4] size-30' />
                    </div> 
                    <div className='bg-linear-to-l from-[#113650] to-[#1e1e1f] flex justify-center rounded-b-lg text-white font-semibold py-1'>
                        <p className='mr-2'>Lihat Detail</p>
                        <img src="src/assets/iconRigth.svg" alt=""/>
                    </div>
                </div>

                <div className='w-80 h-max bg-linear-to-l from-[#069139] to-[#1e1e1f] rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:from-[#05c54b] hover:to-[#2A2A2A]'>
                    <div className='text-white font-semibold flex gap-10 py-2 px-3'>
                        <div className='self-center'>
                            <p className='text-5xl'>75</p>
                            <p>Interaksi Hari Ini</p>
                        </div>
                        <img src="src/assets/Vector1.svg" className='opacity-[.4] size-30' />
                    </div> 
                    <div className='bg-linear-to-l from-[#015e24] to-[#1e1e1f] flex justify-center rounded-b-lg text-white font-semibold py-1'>
                        <p className='mr-2'>Lihat Detail</p>
                        <img src="src/assets/iconRigth.svg" alt=""/>
                    </div>
                </div>

                <div className='w-80 h-max bg-linear-to-l from-[#C2D000] to-[#1e1e1f] rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:from-[#ecfc09] hover:to-[#2A2A2A]'>
                    <div className='text-white font-semibold flex gap-10 py-2 px-3'>
                        <div className='self-center'>
                            <p className='text-5xl'>23</p>
                            <p>Proposal Dikirim</p>
                        </div>
                        <img src="src/assets/Vector2.svg" className='opacity-[.4] size-30' />
                    </div> 
                    <div className='bg-linear-to-l from-[#B8C700] to-[#1e1e1f] flex justify-center rounded-b-lg text-white font-semibold py-1'>
                        <p className='mr-2'>Lihat Detail</p>
                        <img src="src/assets/iconRigth.svg" alt=""/>
                    </div>
                </div>

                <div className='w-80 h-max bg-linear-to-l from-[#D01800] to-[#1e1e1f] rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer hover:from-[#f22509] hover:to-[#2A2A2A]'>
                    <div className='text-white font-semibold flex gap-10 py-2 px-3'>
                        <div className='self-center'>
                            <p className='text-5xl'>12</p>
                            <p>Transaksi Selesai</p>
                        </div>
                        <img src="src/assets/Vector3.svg" className='opacity-[.4] size-30' />
                    </div> 
                    <div className='bg-linear-to-l from-[#750E00] to-[#1e1e1f] flex justify-center rounded-b-lg text-white font-semibold py-1'>
                        <p className='mr-2'>Lihat Detail</p>
                        <img src="src/assets/iconRigth.svg" alt=""/>
                    </div>
                </div>

            </div>
        </div>

        
    </body>
  )
}
