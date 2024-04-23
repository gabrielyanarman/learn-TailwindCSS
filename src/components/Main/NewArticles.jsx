
function NewArticles() {
    return (
			<div className='px-3 lg:px-0 w-full box-content'>
				<h3 className='uppercase text-2xl mb-6 font-semibold dark:text-white'>
					popular news
				</h3>
				<a
					href='#'
					className='flex items-center w-full justify-between mb-3 border-y border-y-transparent hover:border-y-gray-100 py-2'
				>
					<div className='flex items-center'>
						<span className='inline-block w-4 h-4 bg-gradient-to-tr from-orange-500 to-orange-700 mr-5 py-2'></span>
						<span className='dark:text-slate-300'>Svelte</span>
					</div>
					<span className='dark:text-slate-300'>15 articles</span>
				</a>
				<a
					href='#'
					className='flex items-center w-full justify-between mb-3 border-y border-y-transparent hover:border-y-gray-100 py-2'
				>
					<div className='flex items-center'>
						<span className='inline-block w-4 h-4 bg-gradient-to-tr from-green-500 to-green-700 mr-5 '></span>
						<span className='dark:text-slate-300'>Vue</span>
					</div>
					<span className='dark:text-slate-300'>23 articles</span>
				</a>
				<a
					href='#'
					className='flex items-center w-full justify-between mb-3 border-y border-y-transparent hover:border-y-gray-100 py-2'
				>
					<div className='flex items-center'>
						<span className='inline-block w-4 h-4 bg-gradient-to-tr from-red-500 to-red-700 mr-5 '></span>
						<span className='dark:text-slate-300'>Angular</span>
					</div>
					<span className='dark:text-slate-300'>20 articles</span>
				</a>
				<a
					href='#'
					className='flex items-center w-full justify-between mb-3 border-y border-y-transparent hover:border-y-gray-100 py-2'
				>
					<div className='flex items-center'>
						<span className='inline-block w-4 h-4 bg-gradient-to-tr from-blue-500 to-blue-700 mr-5'></span>
						<span className='dark:text-slate-300'>React</span>
					</div>
					<span className='dark:text-slate-300'>32 articles</span>
				</a>
			</div>
		)
}

export default NewArticles