import React from 'react'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { BsArrowDownUp } from 'react-icons/bs'

const CartIcon = () => {
  return (
    <>
        <div className="grid grid-cols-3 divide-x py-1.5 text-sm">
          <div className="text-center">
            <AiOutlineEye className="inline-block h-6 w-6 rounded-full p-[5px]  hover:bg-black hover:text-white" />
          </div>
          <div className="text-center">
            <AiOutlineHeart className="inline-block h-6 w-6 rounded-full p-[5px]  hover:bg-black hover:text-white" />
          </div>
          <div className="text-center">
            <BsArrowDownUp className="inline-block h-6 w-6 rounded-full p-[6px]  hover:bg-black hover:text-white" />
          </div>
        </div>
    </>
  )
}

export default CartIcon