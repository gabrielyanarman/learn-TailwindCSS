
function Pagination() {
    return (
        <>
            <div className="my-12">
                    <ul className="flex justify-center">
                        <li><a href="#" className="pagination-item rounded-l-xl">Prev</a></li>
                        <li><a href="#" className="pagination-item">1</a></li>
                        <li><a href="#" className="pagination-item">2</a></li>
                        <li><a href="#" className="pagination-item dark:hover:bg-indigo-800 dark:text-white hover:bg-indigo-800 hover:text-white text-white bg-indigo-800">3</a></li>
                        <li><a href="#" className="pagination-item">4</a></li>
                        <li><a href="#" className="pagination-item">5</a></li>
                        <li><a href="#" className="pagination-item">6</a></li>
                        <li><a href="#" className="pagination-item rounded-r-xl">Next</a></li>
                    </ul>
                </div>
        </>
    )
}

export default Pagination