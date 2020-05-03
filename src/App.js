import React from 'react';
import ReduxCart from './components/reduxCart/ReduxCart';
import { ContextCart } from './components/contextCart/contextCart';

export default function App() {
	return (
		<div>
			<ReduxCart />
			<ContextCart />
		</div>
	);
}