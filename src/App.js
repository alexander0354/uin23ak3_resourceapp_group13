import './App.css';
import Main from './components/Main';
import data from './Resources.js'


function App() {
  return (
    <div className="App"> 
      {data.map((resources) =>
      <Main key={resources.title} url={resources.url} category={resources.category}/>

  )}
    </div>
  );
}

export default App;
