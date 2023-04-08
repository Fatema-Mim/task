import React, { useEffect, useState } from 'react'
import Arrow from './Arrow'
import Card from './Card'

const Food = () => {
    const [food , setFood] = useState([])
    useEffect(() => {
        fetch("food.json")
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
  return (
    <div className="space-y-3 ">
          <div className=" flex justify-between pr-0 sm:pr-5 pl-0 sm:pl-5">
            <p className="text-xl"><span className="font-bold">Food</span> For Health</p>
            <Arrow />
          </div>
          <div className="pr-0 sm:pr-5 pl-0 sm:pl-5 border-r border-gray-300">
            <div className="space-y-4 ">
              {
                food.map(food => <Card key={food.id} data={food} />)
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

export default Food