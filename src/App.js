import { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get("id")
var lul = await Init(id)
var prevExist = await checkIfPrevExist()
console.log(prevExist)
var afterExist = await checkIfAfterExist()
console.log(afterExist)
async function Init(id){
  if(id === null){
    var response = await fetch('http://localhost:8080/api/latest')
    //  console.log( await  response)
    var object = (await response).json()
    console.log(await object)
    return object
  }else{
    
    
    var response = await fetch('http://localhost:8080/api/get?id=' + id)
    //  console.log( await  response)
    var object = (await response).json()
    console.log(await object)
    
    return object
  }
  

}
async function checkIfPrevExist(){
  var response = await fetch('http://localhost:8080/api/get?id=' + (lul.id - 1 ))
  var object = (await response).json()
  console.log(await object)
  if((await object).id === 0){
    return false
  }else{
    return true
  }
}
async function checkIfAfterExist(){
  var response = await fetch('http://localhost:8080/api/get?id=' + (lul.id + 1) )
  var object = (await response).json()
  if((await object).id === 0){
    return false
  }else{
    return true
  }
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

  
  if(repObj.id < 1){
    
    
    window.location.href = "/"
  }
    
  function Iflatest(){
    if(!afterExist){
      return (
        <>
          <h1 className='display-5'>Latest</h1>
        </>
      )
    }else{
      return(
        <>
          <h1 className='display-6'>ID = {repObj.id}</h1>
        </>
      )
    }
    
  }
 
  return (
    <>{navbar()}
    <div className='main' style={{textAlign: "center", padding: ".5rem"}}>
      
        <Iflatest/>
        
        <h6>{repObj.title}</h6>
        <div className='picture'>
          <img src={"data:image/png;base64,"+repObj.img} style={{width: "80%"}}/>
        </div>
        <div className='controls'>
          <div>
            <button disabled={!prevExist} onClick={()=>{window.location.href ="/?id=" + (repObj.id - 1) }} >{"< Back"}</button>
          </div>
          <div>
            <button onClick={()=>{window.location.href = "/"}} >{"Latest"}</button>
          </div>
          <div>
            <button disabled={!afterExist} onClick={()=>{window.location.href = "/?id=" + (repObj.id + 1)}}>{"Next >"}</button>
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
