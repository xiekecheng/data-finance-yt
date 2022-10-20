import React, { useState } from 'react'
import { BsList, BsXLg } from "react-icons/bs";

const Navbar = () => {
	const [isShow, setIsShow] = useState(true)
	return (
		<>
			<div className='mx-auto w-full flex fixed justify-between h-20 text-white items-center px-4'>
				<h1 className='uppercase text-[#00df9a] text-3xl font-bold'>React.</h1>
				<ul className='flex-row gap-8 hidden md:flex'>
					<li>Home</li>
					<li>Company</li>
					<li>Resource</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
				<BsList onClick={() => setIsShow(true)} className='block md:hidden cursor-pointer' />
			</div>
			{/* 抽屉效果菜单 */}
			{
				(
					<>
						{/* 遮罩层 */}
						{isShow && <div className='w-full h-screen fixed left-0 top-0 bg-pink-300/50 visi' />}
						{/* 菜单 */}
						<div className={`max-w-[60%] w-full bg-white h-screen p-4 fixed top-0 ease-in duration-300 ${isShow ? 'left-0' : '-left-full'}`}>
							<div className='flex justify-between'>
								<h1 className='uppercase'>React.</h1>
								<BsXLg onClick={() => setIsShow(false)} />
							</div>
							<ul className='flex flex-col mt-20'>
								<li className='py-4 flex-1'>Home</li>
								<li className='py-4 flex-1'>Company</li>
								<li className='py-4 flex-1'>Resource</li>
								<li className='py-4 flex-1'>About</li>
								<li className='py-4 flex-1'>Contact</li>
							</ul>
						</div>
					</>
				)
			}
		</>
	)
}

export default Navbar