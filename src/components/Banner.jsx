
function Banner() {
    return (
			<section className='w-full px-3 lg:flex lg:space-x-2 mb-16'>
				<a
					href='#'
					className='inline-block overflow-hidden rounded relative h-96 mb-4 lg:w-3/5 w-full'
				>
					<div className='absolute left-0 top-0 bg-gradient-to-b from-black/10 to-black/60 w-full h-full z-10'></div>
					<img
						src={process.env.PUBLIC_URL + '/images/2.jpg'}
						alt='news'
						className='absolute left-0 top-0 w-full h-full object-cover z-0'
					/>
					<div className='p-4 absolute bottom-0 left-0 z-20 '>
						<h2 className='text-4xl text-gray-100 font-semibold leading-tight'>
							Cras a odio gravida nulla pharetra venenatis ultricies molestie
							turpis.
						</h2>
						<div className='flex mt-4 items-center gap-3'>
							<img
								src='https://randomuser.me/api/portraits/men/5.jpg'
								alt='author'
								className='h-10 w-10 rounded-full object-contain'
							/>
							<div>
								<p className='font-semibold text-gray-200 text-sm'>
									Glen Martinez
								</p>
								<time className='text-gray-200 text-xs'>14 March</time>
							</div>
						</div>
					</div>
				</a>
				<a
					href='#'
					className='inline-block overflow-hidden rounded relative bg-gradient-to-tr from-indigo-400 to-indigo-800 h-96 mb-4 lg:w-2/5 w-full'
				>
					<div className='absolute left-0 top-0 bg-gradient-to-b from-black/10 to-black/60 w-full h-full z-10'></div>
					<img
						src={process.env.PUBLIC_URL + '/images/1.jpg'}
						alt='news'
						className='absolute left-0 top-0 w-full h-full object-cover z-0'
					/>
					<div className='p-4 absolute bottom-0 left-0 z-20 '>
						<h2 className='text-4xl text-gray-100 font-semibold leading-tight'>
							Sed nec urna non enim interdum iaculis ac id dui.
						</h2>
						<div className='flex mt-4 items-center gap-3'>
							<img
								src='https://randomuser.me/api/portraits/women/26.jpg'
								alt='author'
								className='h-10 w-10 rounded-full object-contain'
							/>
							<div>
								<p className='font-semibold text-gray-200 text-sm'>
									Danielle Larson
								</p>
								<time className='text-gray-200 text-xs'>15 March</time>
							</div>
						</div>
					</div>
				</a>
			</section>
		)
}

export default Banner