import { Provider } from 'preact-redux';
import store from './redux/store';
import App from './components/app';
import './style';

export default () => (
	<div id="app">
		<Provider store={store}>
			<App />
		</Provider>
	</div>
);

// https://stackblitz.com/edit/preact-redux-starter?file=reducers%2Fcounter.js
