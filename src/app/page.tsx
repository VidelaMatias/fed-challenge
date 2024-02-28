"use client";

import Navbar from '../../components/Navbar/navbar'
import Hero from '../../components/Hero/hero'
import ButtonAction from '../../components/Common/ButtonAction'
import Slider from '../../components/Slider/slider'
import { useEffect, useState } from 'react'

export default function Home() {

  const [cards, setCards] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setCards(json))
      .catch(error => console.error(error));
  }, []);

  const onClickHandler = () => {
    console.log('calling action: ' );
}
  return (
    <>
      <Navbar></Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between mb-10">
        <div className="laptop:mb-8">
          <Hero />
        </div>
        <section className='flex flex-col laptop:flex-row w-full justify-start'>
          <div className="p-5 w-full laptop:w-1/4 mr-4">
            <h3 className='text-[#9E9E9E] font-bold text-xs leading-5 my-3'>LOREM IPSUM</h3>
            <h1 className='font-bold text-primaryGray leading-[60px] text-[54px]'>Lorem ipsum dolor sit amet</h1>
            <hr className='text-primaryBlue w-[120px] border-t-2 my-4'></hr>
            <p className='text-secondaryGray font-normal text-base leading-5 my-4'>Lorem ipsum dolor sit amet, consectetur. Aenean sed metus vel diam consequat mollis. Praesent metus</p>
            <ButtonAction onClickHandler={onClickHandler} classname={'border-primaryBlue text-primaryBlue bg-white border w-full laptop:w-36 h-12 font-bold'} />
          </div>
          <Slider items={cards}></Slider>
        </section>
      </main>
    </>

  )
}
