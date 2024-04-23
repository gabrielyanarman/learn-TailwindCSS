import Subscribe from "./Main/Subscribe"
import Pagination from "./Main/Pagination"
import News from "./Main/News"
import NewArticles from "./Main/NewArticles"

function Main () {
    return (
			<main>
				<div className='w-full lg:flex lg:space-x-2'>
					<div className='w-full lg:w-2/3'>
						<News />
						<Pagination />
					</div>
					<div className='w-full lg:w-1/3'>
						<NewArticles />
						<Subscribe />
					</div>
				</div>
			</main>
		)
}

export default Main