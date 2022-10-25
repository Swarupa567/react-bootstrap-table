import {useState} from 'react';
import './App.css';
import Table from './components/Table';

function App() {

  return (
    <div className="App">
     
      {/* <ul className="list"> */}
       {/* {data.filter(user => user.ResponseDesc.toLowerCase().includes(query)).map((user,index) =>(
         <li key ={index} className="listItem">{user.superInstId}</li>
       ))} */}
      {/* </ul> */}
       <Table />

    </div>
  );
}

export default App;
