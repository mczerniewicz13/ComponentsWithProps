import './App.css';
import AutoBox from '../AutoBox/AutoBox';
import data from '../../data';

function App() {
  return (
    <div className='wrapper'>
      <h1>Samochody</h1>
      {data.map(auto=>(
        <AutoBox key={auto.marka}
        marka={auto.marka}
        model={auto.model}
        max_v={auto.max_v}
        paliwa={auto.paliwa}
        />
      )
        )}
    </div>
  );
}

export default App;
