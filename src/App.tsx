import CardList from './component/CardList/CardList';
import { FakeDataDefault, FakeDataDisabled } from './data/data';
import './styles/style.scss';

const App = () => {
	return (
		<div className='wrapper'>
			<h1 className='hero-title'>Funbox Quality Test</h1>
			<CardList data={FakeDataDefault} />
			<CardList data={FakeDataDisabled} />
		</div>
	);
}

export default App;