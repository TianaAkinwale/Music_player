import { Routes, Route } from "react-router-dom";
import EventsWorld from '../EventsWorld'
import SignUp from '../SignUp'
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
