import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Create from './pages/create';
import Home from './pages/home';
import DetailPage from "./pages/detail";
import './App.scss';
import EditPage from "./pages/edit";

const App = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
			<Routes>
				<Route path='/create' element={<Create />}/>
			</Routes>
			<Routes>
				<Route path='task/:id' element={<DetailPage />}/>
			</Routes>
			<Routes>
				<Route path='task-edit/:id' element={<EditPage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
