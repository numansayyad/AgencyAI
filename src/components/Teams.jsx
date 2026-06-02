import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

const Teams = () => {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
  <Title 
    title='Meet the team' 
    desc='A passionate team of digital experts dedicated to your brands success.' 
  />

  <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
    {teamData.map((team, index) => (
      <div 
        key={index} 
        className='flex flex-col items-center gap-2 hover:scale-105 duration-500 transition-all cursor-pointer'
      >
        <img 
          src={team.image} 
          alt={team.name} 
          className='w-12 h-12 rounded-full' 
        />

        <h3 className='font-bold text-sm'>{team.name}</h3>

        <p className='text-xs opacity-60'>{team.title}</p>
      </div>
    ))}
  </div>
</div>

  )
}

export default Teams
