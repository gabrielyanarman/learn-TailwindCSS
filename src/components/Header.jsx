import { useEffect, useState } from "react"

function Header() {
	const [isDarkMode,setIsDarkMode] = useState(false)
	const htmlElem = document.documentElement
	
	useEffect(() => {
		isDarkMode ? htmlElem.className = 'dark' : htmlElem.className = ''
	},[isDarkMode])

    return (
			<header className=' flex justify-between px-3 py-2 border-b'>
				<a
					href='#'
					className='text-purple-800 dark:text-purple-600 text-3xl font-bold inline-block'
				>
					News.dev
				</a>
				<nav className='hidden md:flex items-center gap-6'>
					<ul className='flex gap-4 items-center'>
						<li>
							<a href='#' className='header-link'>
								Home
							</a>
						</li>
						<li>
							<a href='#' className='header-link'>
								About
							</a>
						</li>
						<li>
							<a href='#' className='header-link'>
								Contact
							</a>
						</li>
					</ul>
					<div className='flex gap-4 items-center'>
						<button className='header-btn'>Login</button>
						<button className='header-btn'>Register</button>
						<button
							className='dark:text-slate-200 text-gray-500 outline-none'
							onClick={() => {
								isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true)
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-7 h-7'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
								/>
							</svg>
						</button>
					</div>
				</nav>
				<button className='block md:hidden'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6 dark:text-white'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</header>
		)
}

export default Header