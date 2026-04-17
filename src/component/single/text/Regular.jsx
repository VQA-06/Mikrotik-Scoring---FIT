import React, { useState } from 'react'

const Regular = ({teks, color = 'text-neutral', mb = 0}) => {

  return (
    <p className={`${color} text-sm tracking-widest font-bold mb-${mb}`}>{teks}</p>
  )
}

export default Regular