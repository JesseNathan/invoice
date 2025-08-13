import React from 'react'

export default function () {
  return (
    <body className='box-border p-0 m-0'>
        <div className='relative z-0'>
      {/* First lane */}
      <div className='flex h-[60px] w-full relative overflow-hidden bg-[#7B6756]'>
        <div className="w-[500px] bg-[#483C31] transform -skew-x-35 -ml-10 z-10"></div>
      </div>

      {/* Second Line */}
      <div className='flex h-[50px] w-full relative overflow-hidden bg-[#483C32]'>
        <div className="w-[275px] bg-[#ffffff] transform -skew-x-35 -ml-10"></div>
      </div>



      {/* Triangle */}
      <div
        className='bg-transparent absolute top-[60px] left-[30px]'
        style={{
          width: '0',
          height: '0',
          borderLeft: '100px solid transparent',
          borderRight: '100px solid transparent',
          borderTop: '172px solid #483C32'
        }}
      ></div>

      {/* White Lines */}
      <div className="absolute left-[50px] top-13 -translate-y-1/9 flex flex-col justify-between h-[200px]">
        <div className="absolute top-[20px] left-[calc(100%+150px)] w-[15px] h-[100%] bg-white transform rotate-[30deg] origin-top-left">
        </div>
      </div>
    </div>

    <header className="max-w-full flex justify-between h-40 relative overflow-hidden">
        {/* Kolom Kiri */}
        <div className="flex flex-col max-w-max text-2xl leading-7 self-center ml-60 z-10">
            <p className="font-bold">Krishand Software</p>
            <p>Jakarta</p>
            <p>Tel 021.7353764</p>
            <p>NPWP : xx.xxx.xxx.x.xxx.xxx</p>
        </div>

        {/* Kolom Kanan (Logo + Nama Perusahaan) */}      
        <div className="relative w-[700px] h-[auto] -mr-14 ">
        <div className="absolute inset-0 bg-[#7B6756] transform skew-x-25 z-0"></div>
        <div className="relative z-10 flex px-6 py-10 justify-start items-center">
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

    <div className='flex flex-col ml-auto mt-4 mr-35 leading-5 max-w-max '>
      <p className='font-bold text-5xl border-b-1 '>Purchase Request</p> <br />
      <p className='font-light text-3xl mt-[-15px]'>No. : PR/00002/02/2018</p>
    </div>

    <main className='mt-3 px-30'>
        <p className='font-bold'>Please supply the following items :</p>

        <table className='border-separate border-spacing-y-2 table-auto w-full border-spacing-0 mt-1 font-semibold text-center'>
        <thead>
          <tr className='bg-[#780e0e] text-white border-b-20'>
            <th className='text-center px-4 py-2 '>No</th>
            <th className='text-center px-4 py-2'>Item Code</th>
            <th className='text-center px-4 py-2'>Description of Goods</th>
            <th className='text-center px-4 py-2'>Unit</th>
            <th className='text-center px-4 py-2'>Quantity</th>
            <th className='text-center px-4 py-2'>UnitPrice</th>
            <th className='text-center px-4 py-2'>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#780E0E3B] border border-[#5e0a0a] border-x-0'>
            <td className='px-4 py-2'>1</td>
            <td className='px-4 py-2'>MM</td>
            <td className='px-4 py-2'>Meja Makan</td>
            <td className='px-4 py-2'>Pcs</td>
            <td className='px-4 py-2 '>2</td>
            <td className='px-4 py-2'>550.000,00</td>
            <td className='px-4 py-2'>1.000.000,00</td>
          </tr>
          <tr className='bg-[#780E0E3B] border border-[#5e0a0a] border-x-0'>
            <td className='px-4 py-2'>2</td>
            <td className='px-4 py-2'>MT</td>
            <td className='px-4 py-2'>Meja Tulis</td>
            <td className='px-4 py-2'>Pcs</td>
            <td className='px-4 py-2 '>2</td>
            <td className='px-4 py-2'>400.000,00</td>
            <td className='px-4 py-2'>800.000,00</td>
          </tr>
        </tbody>
      </table>
    </main>

    <hr className='mt-50 border-t-2 '/>
    <div className='px-3'>
        <p className='font-semibold mb-10'>Term of Payment : CurrentMonth 30 Days</p>

        <div className='flex justify-between'>
            <div className="flex flex-col space-y-1">
               <p className='mb-10'><span className='font-bold'> Remaris </span><br /> Kebutuhan Internal</p>
                <div className="flex">
                    <span className="font-bold w-[100px]">Date</span>
                    <span>:</span>
                    <span className='ml-3'>03 Feb 2018</span>
                </div>
                <div className="flex">
                    <span className="font-bold w-[100px]">Ref No.</span>
                    <span>:</span>
                    <span className='ml-3'>-</span>
                </div>
                <div className="flex">
                    <span className="font-bold w-[100px]">PR No.</span>
                    <span>:</span>
                    <span className='ml-3'>PR00002/02/2018</span>
                </div>
                <div className="flex">
                    <span className="font-bold w-[100px]">Currency</span>
                    <span>:</span>
                    <span className='ml-3'>IDR</span>
                </div>
                <div className="flex">
                    <span className="font-bold w-[100px]">Page</span>
                    <span>:</span>
                    <span className='ml-3'>Page 1/1</span>
                </div>
            </div>

            <div className='w-[300px]'>
                <div className='border-b-2 py-2 border-[#780e0e] flex justify-between px-2'>
                    <span className='font-semibold'>Sub Total</span>1.800.000,00
                </div>
                <div className='border-b-2 py-2 border-[#780e0e] flex justify-between px-2'>
                    <span className='font-semibold'>Discount</span>1.800.000,00
                </div>
                <div className='border-b-2 py-2 border-[#780e0e] flex justify-between px-2'>
                    <span className='font-semibold '>VAT</span>1.800.000,00
                </div>
                <div className='border-b-2 py-2 border-[#780e0e] flex justify-between px-2'>
                    <span className='font-semibold '>Freight Cost</span>1.800.000,00
                </div>
                <div className='border-b-2 py-2 border-[#780e0e] flex justify-between px-2'>
                    <span className='font-semibold '>Sub Total</span>1.800.000,00
                </div>
            </div>
        </div>
    </div>

    <div className='mt-20 flex justify-center gap-15'>
        <div className='relative border-3 border-[#5e0a0a] py-6 pl-8 pr-15'>
            <div className='absolute -top-5 left-6 bg-[#5e0a0a] text-white px-5 py-2 font-bold'>
                Vendor
            </div>
            
            <div className='mt-4'>       
                <p>Raihan Addo</p>
                <p>Jl. H Nawi Raya No.10 Gandaria Sel 12420</p>
                <p>Jakarta Selatan</p>
            </div>

            <div class="mt-10">
                <p>Tel : </p>
                <p>Fax : </p>
                <p>Atn</p>
            </div>
        </div>
        <div className='relative border-3 border-[#5e0a0a] py-6 pl-8 pr-15 max-w-max'>
            <div className='absolute -top-7 left-6 bg-[#5e0a0a] text-white text-sm px-8 py-2 font-bold '>
                Price of <br />Delivery
            </div>
            
            <div className='mt-4'>
                <p>SMK BAKTI IDHATAJl. <br />
                 Melati No.25 Cilandak Bar 12430 <br /> Jakarta Selatan</p>
            </div>
        </div>
    </div>

    <table className='table-auto mt-20 border-3 border-[#5e0a0a] text-center font-semibold float-end mr-'>
            <thead>
              <tr>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-35'>Requested By</th>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-35'>Prepared By</th>
                <th className='border-2 border-[#5e0a0a] px-4 py-2 w-35'>Aprroved By</th>
              </tr>
            </thead>
            <tbody>
              <tr className='h-25'>
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

          <footer className="w-full flex items-end">
      {/* Bagian kiri taupe */}
      <div className="bg-[#483C32] h-[60px] w-230 relative">
        {/* Segitiga sama kaki di atas taupe */}
        <div
          className="absolute -top-[60px] left-[3%]"
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
          className="absolute left-[920px] top-0"
          style={{
            width: 0,
            height: 0,
            borderTop: '30px solid transparent', // setengah tinggi segitiga
            borderBottom: '30px solid transparent',
            borderLeft: '30px solid #483C32',
          }}
        ></div>
      </div>

      {/* Bagian kanan Taupe */}
      <div className="bg-[#7B6756] h-8 flex-1"></div>
    </footer>
    </body>
  )
}
