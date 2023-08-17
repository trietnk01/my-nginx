import { JWTProvider as AuthProvider } from "contexts/JWTContext";
import React from "react";
import Routes from "routes";
import LoadingSpinner from "ui-component/LoadingSpinner";
import Locales from "ui-component/Locales";
import Snackbar from "ui-component/Snackbar";
const App = () => {
	console.log("process.env.REACT_APP_BACKEND_URL = ", process.env.REACT_APP_BACKEND_URL);
	return (
		<Locales>
			<AuthProvider>
				<React.Fragment>
					<Routes />
					<Snackbar />
					<LoadingSpinner />
				</React.Fragment>
			</AuthProvider>
		</Locales>
	);
};

export default App;
