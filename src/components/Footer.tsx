import React from 'react'
import { FaFacebookSquare, FaGithub, FaQq, FaBasketballBall, FaAlipay } from "react-icons/fa";
const Footer = () => {
	return (
		<div className='w-full bg-black text-white px-4 py-10'>
			<div className='max-w-7xl w-full mx-auto'>
				<div className='grid md:grid-cols-3 gap-8'>
					<div className='flex flex-col gap-4'>
						<h1 className='text-[#00df9a] text-2xl font-bold'>React.</h1>
						<p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita corrupti beatae necessitatibus natus a, voluptatem soluta sit aliquid est dolores quia repellendus aut optio, cumque eveniet qui similique mollitia?</p>
						<ul className='flex justify-around'>
							<li><FaFacebookSquare size={25} /></li>
							<li><FaBasketballBall size={25} /></li>
							<li><FaAlipay size={25} /></li>
							<li><FaGithub size={25} /></li>
							<li><FaQq size={25} /></li>
						</ul>

					</div>
					<div className='grid md:col-span-2 items-center'>
						<div className='grid grid-cols-4'>
							<ul className='flex flex-col text-gray-400 text-sm'>
								<li className='text-xl text-gray-300'>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							<ul className='flex flex-col text-gray-400 text-sm'>
								<li className='text-xl text-gray-300'>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							<ul className='flex flex-col text-gray-400 text-sm'>
								<li className='text-xl text-gray-300'>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							<ul className='flex flex-col text-gray-400 text-sm'>
								<li className='text-xl text-gray-300'>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							{/* <ul className='flex flex-col'>
								<li>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							<ul className='flex flex-col'>
								<li>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul>
							<ul className='flex flex-col'>
								<li>Solution</li>
								<li>Analytics</li>
								<li>Marketing</li>
								<li>Commerce</li>
								<li>insights</li>
							</ul> */}

						</div>

					</div>

				</div>
			</div>
		</div>
	)
}

export default Footer