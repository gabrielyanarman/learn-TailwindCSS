
function News() {
    return (
			<section className='pr-6'>
				<div className='px-3  mb-8 block lg:flex lg:gap-8 justify-center items-start'>
					<img
						src={process.env.PUBLIC_URL + '/images/3.png'}
						alt=''
						className='lg:h-52 lg:w-52 object-cover mb-6 lg:mb-0 w-full'
					/>
					<div>
						<h5 className='font-semibold text-xl mb-4 dark:text-white'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</h5>
						<span className='dark:text-slate-400'>
							Sed laoreet iaculis nunc cursus imperdiet. Curabitur sit amet
							ornare libero. Fusce aliquet sem a erat suscipit, et ornare metus
							luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Sed efficitur neque in lorem ultrices vulputate. Aliquam erat
							volutpat. Mauris eget ullamcorper magna. Maecenas in massa
							volutpat, interdum tellus sit amet, posuere tellus. Maecenas felis
							orci, luctus ac efficitur quis, laoreet in dolor. Integer justo
							leo, pulvinar sit amet arcu non, elementum rutrum diam. Cras vel
							malesuada eros. Nulla porttitor sollicitudin erat, id finibus
							mauris suscipit id. Morbi metus est, vehicula sit amet aliquam
							vel, interdum aliquet sapien. Pellentesque ornare justo eros, sed
							rutrum arcu condimentum eget. Aliquam vel purus nec sapien
							efficitur feugiat.
						</span>
						<div className='flex mt-4 items-center gap-3'>
							<img
								src='https://randomuser.me/api/portraits/women/65.jpg'
								alt='author'
								className='h-10 w-10 rounded-full object-contain'
							/>
							<div>
								<p className='font-semibold text-gray-800 text-sm dark:text-slate-200'>
									Peggy Smith
								</p>
								<time className='text-gray-800 text-xs dark:text-slate-400'>
									10 March
								</time>
							</div>
						</div>
					</div>
				</div>
				<div className='px-3  mb-8 block lg:flex lg:gap-8 justify-center items-start'>
					<img
						src={process.env.PUBLIC_URL + '/images/4.jpg'}
						alt=''
						className='lg:h-52 lg:w-52 object-cover mb-6 lg:mb-0 w-full'
					/>
					<div>
						<h5 className='font-semibold text-2xl mb-4 dark:text-white'>
							Quisque porta lectus vel dignissim imperdiet.
						</h5>
						<span className='dark:text-slate-400'>
							Nullam non eros sit amet nisi hendrerit pulvinar et sed tellus.
							Curabitur accumsan ac turpis non malesuada. Pellentesque habitant
							morbi tristique senectus et netus et malesuada fames ac turpis
							egestas. Proin luctus lectus et lorem laoreet tristique. Integer
							nisi tortor, pretium non varius sed, malesuada non mauris. Morbi
							interdum sem ac scelerisque ultrices. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit. Cras scelerisque lorem et ipsum
							consequat, et blandit ipsum efficitur. Praesent eget varius ipsum,
							sit amet rutrum tortor. Aliquam erat volutpat. Maecenas sed
							pellentesque orci. Donec eu tortor porta, suscipit turpis at,
							rhoncus nibh. Praesent ut pellentesque magna, et rutrum erat.
							Aenean at diam molestie, hendrerit enim vel, rutrum ante.
						</span>
						<div className='flex mt-4 items-center gap-3'>
							<img
								src='https://randomuser.me/api/portraits/men/21.jpg'
								alt='author'
								className='h-10 w-10 rounded-full object-contain'
							/>
							<div>
								<p className='font-semibold text-gray-800 text-sm dark:text-slate-200'>
									Patrick Torres
								</p>
								<time className='text-gray-800 text-xs dark:text-slate-400'>
									9 March
								</time>
							</div>
						</div>
					</div>
				</div>
				<div className='px-3  mb-8 block lg:flex lg:gap-8 justify-center items-start'>
					<img
						src={process.env.PUBLIC_URL + '/images/5.jpg'}
						alt=''
						className='lg:h-52 lg:w-52 object-cover mb-6 lg:mb-0 w-full'
					/>
					<div>
						<h5 className='font-semibold text-2xl mb-4 dark:text-white'>
							Mauris aliquam erat eget orci suscipit rutrum.
						</h5>
						<span className='dark:text-slate-400'>
							Cras et sapien eu ipsum ultricies sodales eu vitae purus. Ut non
							pellentesque nibh. Mauris congue, dolor eu feugiat mollis, nisi
							quam lacinia ex, a gravida mauris est et ipsum. Aliquam erat
							volutpat. Phasellus ex neque, porta nec gravida blandit, placerat
							ut sapien. Vivamus blandit facilisis lacus, ut sagittis leo
							laoreet et. Nullam lobortis aliquam nisi, vitae pellentesque ante
							porttitor egestas. Curabitur lorem mauris, pretium bibendum
							consequat a, tristique id felis. Nullam mattis in ligula quis
							porta.
						</span>
						<div className='flex mt-4 items-center gap-3'>
							<img
								src='https://randomuser.me/api/portraits/men/78.jpg'
								alt='author'
								className='h-10 w-10 rounded-full object-contain'
							/>
							<div>
								<p className='font-semibold text-gray-800 text-sm dark:text-slate-200'>
									Fernando Garcia
								</p>
								<time className='text-gray-800 text-xs dark:text-slate-400'>5 March</time>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
}

export default News