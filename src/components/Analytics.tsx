import React from 'react'
import latopIms from '../assets/laptop.jpeg'
const Analytics = () => {
	return (
		<div className='w-full h-screen bg-white'>
			<div className='w-full h-full max-w-7xl mx-auto bg-white flex justify-center items-center'>
				<div className='grid md:grid-cols-2 px-4 items-center'>
					<img src={latopIms} alt="" />
					<div className='flex flex-col gap-4'>
						<h1>Data Analytics Dashboard</h1>
						<p>Manage Data Analytics Centrally</p>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt fuga doloremque recusandae ad deserunt dolore nemo temporibus libero eaque praesentium perspiciatis, repellat a ratione sed, cupiditate, harum quibusdam blanditiis debitis?</p>
						<button className='px-4 py-2 bg-black text-[#00df9a] rounded w-40'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Analytics