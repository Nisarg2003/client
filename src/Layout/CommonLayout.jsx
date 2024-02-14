import React from 'react'
import Layout from './Layout';

const CommonLayout = ({ children }) => {
  return (
    <>
    <div className='flex '>
    <Layout />
    <div className="main-content w-[100%] h-full ">
          {children}
        </div>
      </div>
    </>
  )
}

export default CommonLayout;
