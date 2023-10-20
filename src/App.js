import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import UploadPage from './pages/UploadPage/UploadPage';
import './App.scss';


export default function App () {
	return (
		<BrowserRouter>
			<div className="App">
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<MainPage />} />
					{/* <Route path="/videos/:videoId" element={<MainPage />} /> */}
					<Route path="/upload" element={<UploadPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}
