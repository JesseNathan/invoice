import React from 'react'
import './loading.css'

export default function loading() {
  return (
    <body className='h-[100vh] flex items-center justify-center bg-white z-20'>   
    <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
    </body>

  )
}
