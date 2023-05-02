
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai';

import { useState, useEffect } from 'react';
import React, { useRef } from 'react'


import 'swiper/css';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'



const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


  
export default function Home({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const parallax = useRef<IParallax>(null!)
  const [darkMode, setDarkMode] = useState(false);

  const [curr, setCurr] = useState(0)

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
      
      
      <div style={{ width: '100%', height: '100%', background: '#253237' }}>
        
      <Parallax ref={parallax} pages={3}>
        
        
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

      
        
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            backgroundColor: '#171A24',
          }}
          
        />
        
        
            
        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
        
        
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>
          
        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>
          
        

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
            
          }}
          
        /> */}
        
        
          
        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          
          }}>
            <div className='text-center p-10' style={{ width: '100%', height: '100%', background: '#171A24 ' }}>
            <li className='flex items-center'><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-xl text-gray-500'/></li>
              
            <h2 className="text-5xl pt-20 py-10 text-gray-300 font-medium dark:text-gray-400">Hi, I'm Shadan Namazifard</h2>
            <h2 className='text-2xl py-2 text-gray-300'>Developer and Designer</h2>
            <p className='text-md py-5 leading-8 text-gray-300'>
              computer science student @ University of British Colombia
            </p>
            <div className='text-5xl flex justify-center gap-16 py-20 text-gray-400 dark:text-gray-50'>
            <a href="https://github.com/Shadannamazi" target="_blank" rel="noreferrer">
            <AiFillGithub/>
            </a>
           
            <a href="https://www.linkedin.com/in/shadan-namazifard-b2a875227/?originalSubdomain=ca" target="_blank" rel="noreferrer">
            <AiFillLinkedin/>
            </a>
            <a href="mailto:namazifard.shadan@gmail.com" target="_blank" rel="noreferrer">
            <AiOutlineMail/>
            </a>
          </div>
          </div>
          
          
        </ParallaxLayer>

        
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            //backgroundColor: '#87BCDE',
          }}
          
        /> */}
        

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
          <div>
          <h2 className='text-4xl pl-10 pr-10 text-gray-300 font-medium dark:text-gray-400'>About Me</h2>
            <p className='text-md py-5 p-10 leading-8 text-gray-300'>
            Hello! My name is Shadan Namazifard, and I'm a second-year computer science student at the University of British Columbia. I'm passionate about both art and development, 
            and I love using my skills to bring creative ideas to life.
            I've been fascinated with technology and programming since a young age, 
            and I pursued computer science to deepen my understanding of the field. 
            Through my studies, I've gained experience in a range of programming languages and software development methodologies.
            I'm particularly interested in [Your Areas of Interest or Expertise].
            Alongside my studies, I'm also passionate about art. I've been drawing and painting for as long as I can remember, 
            and I enjoy exploring the intersection between art and technology. 

            </p>
            
            
          </div>
          
          
        </ParallaxLayer>
        
        <ParallaxLayer
         
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
          {/* onClick={() => parallax.current.scrollTo(0)}> */}
         {/* <img src={url('clients-main')} style={{ width: '40%' }} /> */}
         {/* <img src={url('bash')} style={{ width: '40%' }} /> */}
         
         {/* <h2 className='text-white'>HEllo</h2> */}
          {/* <img src={url('bash')} style={{ width: '90%' }} /> */}
          {/* <img src={"public/Project Name (1).png"} style={{ width: '50%' }} /> */}

          
          
          <ul class = 'size' className='p-20'>
          
          <div class='button grow size' >
          <a className='text-4xl' href="https://github.com/Shadannamazi/HerVision.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>HerVision</strong></h1>
          <p className='p-10'>HerVision is an iOS application designed and impleneted with Swift to help Aritzia customers build their personal 
            style by allowing them to add pieces to their wardrobe using a recommendation algorithm. </p>
          
          </div>
          <h2 className='p-10'></h2>
          <div class='button grow size'>
          <a className='text-4xl' href="https://github.com/Shadannamazi/BugTrackerApp.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>Bug Tracker Application</strong></h1>
          <p className='p-10'>This is a bug tracking desktop application that lets users add bugs and errors they have
           encountered in order to keep track of all bugs and information related to them all in one place. 
            </p>
          
          </div>
      
          </ul>
        
          <ul class = 'size' className='py-20'>
          
          <div class='button grow size'>
          <a className='text-4xl' href="https://github.com/Shadannamazi/Telegram-Bot.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>Telegram Bot </strong></h1>
          <p className='p-10'> A Telegram Chat Bot made by utilizing the Telegram Bot API. This particular chat bot has several features, 
          including message handling and processing, telling the current time, and serving as a chatbot.</p>
           
          
          </div>
          <h2 className='p-10'></h2>
          <div class='button grow size'>
          <a className='text-4xl' href="https://github.com/Shadannamazi/Image-Processor-App.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>Image Processor Application</strong></h1>
          <p className='p-10'>This is a desktop application with a range of features, including filters, resizing, 
          grayscale and sepia effects, rotating and cropping, the app offers a versatile solution for all your 
          image editing needs. 
           </p>
          
          </div>
      
          </ul>

          <ul class = 'size' className='p-20'>
          
          <div class = 'button grow size'>
          <a className='text-4xl' href="https://github.com/Shadannamazi/HexMaze-Solver.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>HexMaze Solver</strong></h1>
          <p className='p-10'>Generates a HexBoard with HexCells consisting of hexagons with axial coordinates and solves the maze via DFS. </p>
          
          </div>
          <h2 className='p-10'></h2>
          <div class = 'button grow size'>
          <a className='text-4xl' href="https://github.com/Shadannamazi/Traveling-Salesman.git" target="_blank" rel="noreferrer">
          <AiFillGithub/>
          </a>
          <h1 className='text-2xl py-5 p-10 leading-8 text-white'><strong>Traveling Salesman Solver</strong></h1>
          <p className='p-10'>The goal of the traveling salesperson problem is to find the shortest path that visits every point exactly once 
          and returns to the starting point. </p>
          
          </div>
      
          </ul>
          
        </ParallaxLayer>
        
        
        {/* <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
            //backgroundColor: '#87BCDE',
          }}
          
        /> */}

        
        {/* <div className="overflow-hidden relative">
              <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
              >
                {slides}
              </div>
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prev}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  onClick={next}
                  className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                <ChevronRight size={40} />
                </button>
              </div>

              <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                  {slides?.map((_, i) => (
                    <div
                      className={`
                      transition-all w-3 h-3 bg-white rounded-full
                      ${curr === i ? "p-2" : "bg-opacity-50"}
                    `}
                    />
                  ))}
                </div>
              </div>
            </div> */}
        
      </Parallax>
      
      
      <div className='text-white'>
        
        {/* <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='h-96 flex'>
              <div className={'card card-active to-red-600/40'}></div>
              <h2>Project 1</h2>
              <p>explanation about project...</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-96 flex'>
              <div className={'card to-red-600/40'}></div>
              <h2>Project 1</h2>
              <p>explanation about project...</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='h-96 flex'>
              <div className={'card to-red-600/40'}></div>
              <h2>Project 1</h2>
              <p>explanation about project...</p>
            </div>
          </SwiperSlide>

          
          
          
    </Swiper> */}
    </div>
    </div>
    
          
    //</main>
    //</div>
  )
}
