import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/list" element={<List />} />
					<Route path="/hotels/:id" element={<Hotel />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
