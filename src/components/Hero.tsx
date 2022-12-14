// @ts-nocheck
import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='w-full h-screen flex flex-col justify-center items-center text-white gap-4 text-center'>
			<p className='uppercase text-[#00df9a]'>Grow With Data Analytics</p>
			<div>
				<h1 className='text-3xl'>Grow With Data.</h1>
				<h2 className='text-2xl'>Fast,flexible financing for
					<Typed
					className='pl-2'
						strings={['BTB', 'BTC', 'SASS']}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
				</h2>

			</div>
			<p className='text-gray-400'>Monitor your data to increase revenue</p>
			<button className='bg-[#00df9a] px-8 py-2 rounded text-black'>Get Started</button>

		</div>
	)
}

export default Hero