import logo from './logo.svg';
import './App.css';

function navbar() {
  return (
    <>
      <div className='navbar'>
        <div>
          <a href='https://axcwg.github.io'>Back</a>
          
        </div>
        <div>
        <a href=''>Latest</a>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      {navbar()}
      <div>
        <div className='picture'>
          <img src='/assets/img/test 拷贝.png'></img>
        </div>
      </div>
    </>

  );
}

export default App;
