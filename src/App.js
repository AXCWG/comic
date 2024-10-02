import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
await Init()
var lul = await Init()
async function Init(){
  var response = await fetch('http://localhost:8080/api/latest')
  //  console.log( await  response)
  var object = (await response).json()
  console.log(await object)
  return object

}
function navbar() {
  return (
    <>
      <div className='navbar'>
        <div>
          <a href='https://axcwg.github.io'>Back</a>
          
        </div>
        
      </div>
    </>
  );
}

function App() {
  const [repObj, setObj] = useState(lul)
  
    
    

 
  return (
    <>{navbar()}
    <div className='main' style={{textAlign: "center", padding: ".5rem"}}>
        <h1 className='display-5'>Latest</h1>
        
        <h6>{repObj.title}</h6>
        <div className='picture'>
          <img src={"data:image/png;base64,"+repObj.img} style={{width: "80%"}}/>
        </div>
        <div className='controls'>
          <div>
            <a>{"< Back"}</a>
          </div>
          <div>
            <a href=''>{"Latest"}</a>
          </div>
          <div>
            <a>{"Next >"}</a>
          </div>
        </div>
        <footer style={{fontSize: ".5em"}}>
          <br/>
          <span>©Andy Xie Creativity Workgroup 2024</span>
        </footer>
      </div>
      
      
    </>

  );
}

export default App;
