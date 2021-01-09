import React from 'react'
// import classes from '../MainCard/MainCard.module.scss'

export const SvgPlus = () => {
  return (
    <svg className='plus' width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#000000"/>
      <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#000000"/>
    </svg>
  )
}

export const SvgArrow = () => {
  return (
    <svg className='arrow' width="13" height="11" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 9.5L9.5 1.5L17 9.5" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const SvgConnectionFirst = () => {
  return (
    <svg width="254" height="40" viewBox="0 0 254 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M253 0V12C253 16.4183 249.418 20 245 20H9C4.58172 20 1 23.5817 1 28V40" stroke="black" strokeWidth="2"/>
    </svg>
  )
}

export const SvgConnectionSecond = () => {
  return (
    <svg width="38" height="40" viewBox="0 0 38 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37 0V12C37 16.4183 33.4183 20 29 20H9C4.58172 20 1 23.5817 1 28V40" stroke="black" strokeWidth="2"/>
    </svg>
  )
}

export const SvgConnectionThird = () => {
  return (
    <svg width="254" height="40" viewBox="0 0 254 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 0V12C1 16.4183 4.58172 20 9 20H245C249.418 20 253 23.5817 253 28V40" stroke="black" strokeWidth="2"/>
    </svg>
  )
}