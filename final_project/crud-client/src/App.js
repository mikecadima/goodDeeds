import React, {Fragment, useState, useEffect} from 'react';
import InputDeed from "./components/InputDeed";
import ListDeeds from "./components/ListDeeds";
import ContactUs from './components/Contactus';
import './App.css';
import AvailableDeeds from './components/AvailableDeeds';
import DisplayRating from './components/DisplayRating';

function App() {
  const [deed, setDeed] = useState([]);
  const [deeds, setDeeds] = useState([]);
  //const [opdeeds, setOpdeeds] = useState([]);

    async function getDeeds(){
        const response = await fetch("http://localhost:3440/deeds");

        const deedArray = await response.json();
        console.log(deedArray);
        setDeeds(deedArray);
    }

    useEffect(()=>{
        getDeeds();
    }, []);


    const deedAdded = (newDeed) =>{
      setDeeds([...deeds,newDeed])
    }

  return (
    <Fragment>
      <div className="container">
        <ContactUs />
        <hr></hr>
        <DisplayRating />
        <hr></hr>
        <InputDeed onDeedAdded={deedAdded} />
        <hr></hr>
        <ListDeeds deeds={deeds} />
        <hr></hr>

        <AvailableDeeds deeds={deeds} />
      </div>
    </Fragment>
  );
}

export default App;
