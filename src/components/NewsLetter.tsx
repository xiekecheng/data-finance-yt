import React from 'react'

const Newsletter = () => {
	return (
		<div className='w-full bg-black p-4'>
			<div className='w-full max-w-7xl text-white'>
				<div className='grid md:grid-cols-3'>
					<div className='md:col-span-2'>
						<h1 className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, asperiores?</p>
					</div>
					<div>
						<div className='grid md:grid-cols-2 gap-4'>
							<input className='rounded p-2' type="email" placeholder='Enter your email' />
							<button className='bg-[#00df9a] text-black px-4 py-2 rounded w-[50%] md:w-full mx-auto'>Notify Me</button>
						</div>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ab tenetur nihil!</p>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Newsletter