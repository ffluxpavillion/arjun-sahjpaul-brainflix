import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import UploadPage from './pages/UploadPage/UploadPage';
import './App.scss';
import Header from './components/Header/Header';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/video/:videoId" element={<MainPage />} />
				<Route path="/upload" element={<UploadPage />} />
			</Routes>
		</div>
	);
}
