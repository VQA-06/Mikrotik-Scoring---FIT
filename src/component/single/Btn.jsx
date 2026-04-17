import React from 'react'

const Btn = ({teks, click}) => {
  return (
    <button className={`w-full bg-primary text-secondary py-3 font-bold tracking-wider rounded-lg text-lg`} onClick={click}>{teks}</button>
  )
}

export default Btn