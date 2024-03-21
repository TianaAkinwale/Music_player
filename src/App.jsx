import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
	<Routes>
		<Route index element={<Login />} />
		<Route path="login" element={<Login />} />
    	</Routes>
  );
};

export default App;
