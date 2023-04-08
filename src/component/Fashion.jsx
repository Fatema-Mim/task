import React, { useEffect, useState } from 'react'
import Arrow from './Arrow'
import Card from './Card'

const Fashion = () => {
    const [fashion , setFashion] = useState([])
    useEffect(() => {
        fetch("dress.json")
            .then(res => res.json())
            .then(data => setFashion(data))
    }, [])
  return (
    <div className="space-y-3 ">
          <div className=" flex justify-between pr-0 sm:pr-5">
            <p className="text-xl"><span className="font-bold">Fashion</span> For Women</p>
            <Arrow />
          </div>
          <div className="pr-0 sm:pr-5 border-r border-gray-300">
            <div className="space-y-4 ">
              {
                fashion.map(dress => <Card key={dress.id} data={dress} />)
              }
              
              <button className="w-full rounded-md bg-black py-2 text-[9px] uppercase tracking-wider text-white">
                {" "}
                view all
              </button>
            </div>
          </div>
        </div>
  )
}

export default Fashion