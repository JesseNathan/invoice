import { useState } from 'react'
import './App.css'

function App() {

  return (
  <body className='box-border p-0 m-0'>
    <div className='relative z-0'>
      {/* First lane */}
      <div className='flex h-[30px] w-full relative overflow-hidden bg-[#7B6756]'>
        <div className="w-[500px] bg-[#483C31] transform -skew-x-35 -ml-10 z-10"></div>
      </div>

      {/* Second Line */}
      <div className='flex h-[40px] w-full relative overflow-hidden bg-[#483C32]'>
        <div className="w-[275px] bg-[#ffffff] transform -skew-x-35 -ml-10"></div>
      </div>



      {/* Triangle */}
      <div
        className='bg-transparent absolute top-[30px] left-[30px]'
        style={{
          width: '0',
          height: '0',
          borderLeft: '100px solid transparent',
          borderRight: '100px solid transparent',
          borderTop: '172px solid #483C32'
        }}
      ></div>

      {/* White Lines */}
      <div className="absolute left-[40px] top-13 -translate-y-1/9 flex flex-col justify-between h-[200px]">
        <div className="absolute top-[-5px] left-[calc(100%+150px)] w-[13px] h-[100%] bg-white transform rotate-[30deg] origin-top-left">
        </div>
      </div>
    </div>

        <header className="max-w-full flex justify-between h-40 relative overflow-hidden">
            {/* Kolom Kiri */}
            <div className="flex flex-col max-w-max text-2sm leading-5 self-center ml-80 z-10">
              <p className="font-bold">Krishand Software</p>
              <p>Jakarta</p>
              <p>Tel 021.7353764</p>
              <p>NPWP : xx.xxx.xxx.x.xxx.xxx</p>
            </div>

            {/* Kolom Kanan (Logo + Nama Perusahaan) */}      
          <div className="relative w-[550px] h-[150px] -mr-10 ">
            <div className="absolute inset-0 bg-[#7B6756] transform skew-x-25 z-0"></div>
            <div className="relative z-10 flex  justify-start ">
              <div className="w-[108px] h-[91px] p-2 bg-red-600 mr-3 ml-20 flex items-center justify-center">
                <img src="" alt="logo" />
              </div>
                <div className="self-center">
                  <p className="text-white font-semibold text-sm">
                    PT. KATTA INDONESIA <br />
                  <span className="text-xs font-light italic">"ENHANCED "</span>
                </p>
              </div>
            </div>
          </div>
    </header>

    <div className='flex flex-col ml-auto mt-4 mr-30 leading-none max-w-max'>
      <p className='font-bold text-2xl border-b-1 '>Purchase Request</p> <br />
      <p className='font-light text-lg mt-[-15px]'>No. : PR/00002/02/2018</p>
    </div>

    <main className='mt-30 px-30'>
      <div className='flex justify-between'>
        <div className='self-end font-bold'>
          <p>Please supply the following items :</p>
        </div>
        <div>
          <p><span className='font-bold mr-20'>Date</span>: 02 Feb 2013</p>
          <p><span className='font-bold mr-23'>Stc</span>: Stc A</p>
          <p><span className='font-bold mr-20'>Page</span>: Page 1/1</p>
        </div>
      </div>
      
      <table className='table-auto w-full border-spacing-0 mt-4 font-semibold text-center'>
        <thead>
          <tr className='border-t-4 border-b-2 border-[#5e0a0a]'>
            <th className='text-center px-4 py-2 '>No</th>
            <th className='text-center px-4 py-2'>Item Code</th>
            <th className='text-center px-4 py-2'>Description of Goods</th>
            <th className='text-center px-4 py-2'>Unit</th>
            <th className='text-center px-4 py-2'>Quantity</th>
            <th className='text-center px-4 py-2'>Required Date</th>
            <th className='text-center px-4 py-2'>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#780E0E3B] '>
            <td className='px-4 py-2'>1</td>
            <td className='px-4 py-2'>MM</td>
            <td className='px-4 py-2'>Meja Makan</td>
            <td className='px-4 py-2'>Pcs</td>
            <td className='px-4 py-2 '>2</td>
            <td className='px-4 py-2'>03/02/2018</td>
            <td className='px-4 py-2'>500.000,00</td>
          </tr>
        </tbody>
      </table>

      <hr className='mt-30 border-t-3 border-[#5e0a0a]'/>
      <div className='flex justify-between'>
        <div className='flex flex-col leading-none mt-2'>
          <p className='mb-15'>Prefered Vendor .Achmad Hariyanto</p>
          <p><span className='font-bold'> Remarks </span><br />Keperluan Pantry</p>
        </div>
        <div>
          <table className='table-auto mt-4 border-3 border-[#5e0a0a] text-center font-semibold'>
            <thead>
              <tr>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-45'>Requested By</th>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-45'>Prepared By</th>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-45'>Aprroved By</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-30'>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'></td>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'></td>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'></td>
              </tr>
              <tr>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'>Doni</td>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'>Ani</td>
                <td className='border-2 border-[#5e0a0a] px-4 py-2'>Santi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>

    <footer className="w-full flex items-end">
      {/* Bagian kiri taupe */}
      <div className="bg-[#483C32] h-[40px] w-150 relative">
        {/* Segitiga sama kaki di atas taupe */}
        <div
          className="absolute -top-[60px] left-[13%]"
          style={{
            width: 0,
            height: 0,
            borderLeft: '50px solid transparent',
            borderRight: '50px solid transparent',
            borderBottom: '100px solid #483C32',
          }}
        ></div>

        {/* Segitiga lancip kanan*/}
        <div
          className="absolute right-[-20px] top-0"
          style={{
            width: 0,
            height: 0,
            borderTop: '20px solid transparent', // setengah tinggi segitiga
            borderBottom: '20px solid transparent',
            borderLeft: '20px solid #483C32',
          }}
        ></div>
      </div>

      {/* Bagian kanan Taupe */}
      <div className="bg-[#7B6756] h-6 flex-1"></div>
    </footer>
 
  </body>
  )
}

export default App
