import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import MainUtils from './components/Main/MainUtils'

function App() {
  return (
		<div className='App dark:bg-slate-900'>
			<div className='max-w-screen-xl m-auto grid grid-rows-layout'>
				<Header />
				<div>
					<MainUtils />
					<Banner />
					<Main />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default App;
