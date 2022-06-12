import Image from 'next/image'
import React from 'react'

import { BeakerIcon, ChevronDownIcon, HomeIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid'
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon } from '@heroicons/react/outline'
import RedditLogoImg from '../images/Reddit_logo_new.svg'
import RedditIcon from '../images/52053.png'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">

      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image src={RedditLogoImg} layout="fill" objectFit="contain" />
      </div>

      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline" >Home</p>
        <ChevronDownIcon  className="h-5 w-5" />
      </div>
      {/* Search Field */}
      <form className="flex flex-1 items-center space-x-2 border 
      border-gray-200 rounded-sm bg-gray-100 px-3 py-1" >
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input className="flex-1 bg-transparent outline-none" type="text" placeholder='Search Reddit' />
        <button type="submit" hidden />
      </form>
      
      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex" >
        <SparklesIcon className='icon' />
        <GlobeIcon className='icon' />
        <VideoCameraIcon className='icon' />
        <hr className="h-10 border border-gray-100"/>
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <PlusIcon className='icon' />
        <SpeakerphoneIcon className='icon' />
      </div>

      <div className='ml-5 flex items-center lg:hidden'>
        <MenuIcon className='icon' />
      </div>

      {/* SIgn In SignOut */}
      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2  lg:flex " >
        <div className="relative h-5 w-5 flex-shrink-0" >
          <Image src={RedditIcon}  layout="fill" alt="" objectFit="contain" />
        </div>
      </div>

      <p>Sign In</p>
      
    </div>
  )
}

export default Header