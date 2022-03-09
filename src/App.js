import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import  "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";

function App() {

// }

  const url = "https://reqres.in/api/users?page=2"

  const [apiData, setApiData] = useState([])

  useEffect(()=>{
    fetch(url)
    .then((r)=> r.json())
    .then((result)=>{
      // console.log(result.data);
      setApiData(result.data)
    })

  }, [])

  console.log(apiData);
  return (
    <>

    <div className="container mt-3">
      <div className="row">
        <div id='flex' className="col">
         {apiData.map((item) =>{
          //  console.log(item);
          return(
            <div  className="container">
              <div className="row">
                <div className="col">
                <div key={item.id} className="card mb-5">
              <div className="card-header bg-primary text-light text-center">
              <p >{item.first_name} {item.last_name}</p>
                </div>
              <div className="card-body bg-light text-center">
                <img src={item.avatar} alt="" />
                <hr />
                </div>
                <div className="card-footer bg-info text-white">
                <p>{item.email}</p>
                  </div>
                
               
              </div>
                  </div>
                </div>
              </div>
          )
         })}
          </div>
        </div>
      </div>
    
    </>
  );
}

export default App;
