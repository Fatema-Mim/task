import React from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

const Star = () => {
  return (
    <>
        <div className="flex space-x-1">
            <div className="flex">
              <AiTwotoneStar className="w-2.5 text-yellow-400" />
              <AiTwotoneStar className="w-2.5 text-yellow-400" />
              <AiTwotoneStar className="w-2.5 text-yellow-400" />
              <AiTwotoneStar className="w-2.5 text-yellow-400" />
              <AiTwotoneStar className="w-2.5 text-yellow-400" />
            </div>
            <span className="self-center text-[9px] text-gray-400">(5.0)</span>
          </div>
    </>
  )
}

export default Star