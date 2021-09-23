import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

const App = () => {
	return (
		<Container>
			<Header />
			<Shop />
		</Container>
	);
};

export default App;
