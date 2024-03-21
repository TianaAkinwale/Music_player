import { Routes, Route } from "react-router-dom";
import EventsWorld from './components/EventsWorld'
import SignUp from './components/SignUp'
const App = () => {
	return (
	<Routes>
		<Route index element={<SignUp />} />
		<Route path="SignUp" element={<SignUp />} />
		<Route path="EventsWorld" element={<EventsWorld />} />
    	</Routes>
  );
};

export default App;
