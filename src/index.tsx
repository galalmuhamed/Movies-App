import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MoviesProvider from './MoviesContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<MoviesProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MoviesProvider>
	</React.StrictMode>
);
