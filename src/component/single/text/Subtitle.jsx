import React from 'react'

const Subtitle = ({teks, color = 'primary'}) => {
  return (
    <p className={`text-${color} text-2xl tracking-wider font-bold`}>{teks}</p>
  )
}

export default Subtitle