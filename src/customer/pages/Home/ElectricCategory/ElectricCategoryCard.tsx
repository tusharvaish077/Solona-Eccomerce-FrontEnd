import React from 'react'
import { HomeCategory } from '../../../../types/HomeCategoryTypes'

const ElectricCategoryCard = ({ item }: { item: HomeCategory }) => {
  return (
    <div
      className="
        group
        cursor-pointer
        w-[115px]
        sm:w-[125px]
        rounded-xl
        px-4
        py-5
        flex
        flex-col
        items-center
        gap-3
        bg-[#f3f4f6]/80
        border
        border-gray-200
        transition-all
        duration-200
        hover:bg-[#e9ecef]
      "
    >
      {/* Icon wrapper */}
      <div
        className="
          w-14
          h-14
          flex
          items-center
          justify-center
          rounded-lg
          bg-white/60
          transition
          group-hover:bg-white
        "
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Label */}
      <h2
        className="
          text-sm
          font-medium
          text-gray-700
          text-center
          leading-tight
          line-clamp-2
        "
      >
        {item.name}
      </h2>
    </div>
  )
}

export default ElectricCategoryCard
