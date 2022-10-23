import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
	const cardsParam = [
		{
			id: 1,
			title: 'Single User',
			price: 149,
			img: single,
			desctiption1: '500GB Storage',
			desctiption2: '1 User Allowed',
			desctiption3: 'Send up to 2GB',
		},
		{
			id: 2,
			title: 'PartneShip',
			price: 199,
			img: double,
			desctiption1: '1 TB Storage',
			desctiption2: '3 Users Allowed',
			desctiption3: 'Send up to 10 GB',
		},
		{
			id: 3,
			title: 'Group Account',
			price: 299,
			img: triple,
			desctiption1: '5 TB Storage',
			desctiption2: '10 Users Allowed',
			desctiption3: 'Send up to 20 GB',
		},
	]
	return (
		<div className='w-full bg-white py-20'>
			<div className='max-w-7xl w-full mx-auto'>
				<div className='grid md:grid-cols-3 gap-8'>
					{
						cardsParam.map(card => {
							const { id, title, price, img, desctiption1, desctiption2, desctiption3 } = card
							return (
								<div key={id} className={`flex flex-col items-center p-8 rounded shadow hover:scale-105 duration-300 shadow-gray-300 ${id === 2 ? 'bg-gray-100' : ''}`}>
									<img className='w-20' src={img} alt="" />
									<h1 className='text-3xl font-bold'>{title}</h1>
									<span className='text-2xl font-bold'>${price}</span>
									<ul className='flex flex-col w-full text-center'>
										<li className='border-b border-gray-200 inline'>{desctiption1}</li>
										<li className='border-b border-gray-200 inline'>{desctiption2}</li>
										<li className='border-b border-gray-200 inline'>{desctiption3}</li>
									</ul>
								</div>
							)
						})
					}
				</div>

			</div>
		</div>
	)
}

export default Cards