
function Footer() {
    return (
			<footer className='border-t py-6'>
				<div className='md:flex justify-around px-3'>
					<div className='px-3 mb-6 md:mb-0'>
						<h6 className='font-semibold mb-4 dark:text-white'>Company</h6>
						<ul>
							<li>
								<a className='footer-link' href='#'>
									Team
								</a>
							</li>
							<li>
								<a className='footer-link' href='#'>
									About Us
								</a>
							</li>
						</ul>
					</div>
					<div className='px-3 mb-6 md:mb-0'>
						<h6 className='font-semibold mb-4 dark:text-white'>Content</h6>
						<ul>
							<li>
								<a className='footer-link' href='#'>
									Block
								</a>
							</li>
							<li>
								<a className='footer-link' href='#'>
									Policy
								</a>
							</li>
							<li>
								<a className='footer-link' href='#'>
									Documentation
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h6 className='font-semibold mb-4 dark:text-white'>Contact Us</h6>
						<ul className='flex md:flex-col items-center gap-4'>
							<li className='mb-3 md:mb-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-7 h-7 dark:text-slate-400 dark:hover:text-white text-gray-500 hover:text-black cursor-pointer'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z'
									/>
								</svg>
							</li>
							<li className='mb-3 md:mb-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-7 h-7 dark:text-slate-400 dark:hover:text-white text-gray-500 hover:text-black cursor-pointer'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25'
									/>
								</svg>
							</li>
							<li className='mb-3 md:mb-0'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-7 h-7 dark:text-slate-400 dark:hover:text-white text-gray-500 hover:text-black cursor-pointer'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
									/>
								</svg>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		)
}

export default Footer