
function Subscribe() {
    return (
			<>
				<div className='border border-dotted dark:hidden'></div>
				<div className='px-3 py-10'>
					<h6 className='uppercase text-2xl mb-6 font-semibold dark:text-white'>Subscribe</h6>
					<p className='mb-4 dark:text-slate-300'>Subscribe to our newslatter.</p>
					<input
						placeholder='Your email address'
						type='email'
						className='bg-gray-100 w-full p-2 border-2 rounded-t focus:border-gray-400 text-gray-700 dark:text-gray-900 outline-0'
					/>
					<button className=' dark:border-0 border p-2 w-full mt-4 text-white bg-indigo-700 hover:bg-indigo-500'>
						Subscribe
					</button>
				</div>
				<div className='border border-dotted dark:hidden'></div>
			</>
		)
}

export default Subscribe