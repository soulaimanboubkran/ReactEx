import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostComment from './apiTest/PostComment';
import Comment from './apiTest/Comment';

function App() {
  const [res, setRes] = useState([]);
  const [Index, setIndex] = useState(0);

  const handleChange = () => {
    if (Index < res.length - 1) {
      setIndex(Index + 1);
    } else {
     
      setIndex(0);
    }
    getData();
  }

  const getData = async () => {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=5'); 
      setRes(response.data);
    } catch (error) {
      console.error('Request Error:', error);
    }
  }


  
  {/*
  useEffect(() => {
   
  const input = [1,2,3,4,5];

  const carre= input.map((i)=>{
    return i ** 2;
   })
   console.log(carre)

   
  const input2 = [1,-2,3,4,-5];
   const positifs= input2.filter((i)=>{
    if(i>0)  return true
   })
   console.log(positifs)
   const sum = input2.reduce((i,c)=>{return i+c
   })

   console.log(sum)
  
 
   const sumPositif = positifs.reduce((i,c)=>i+c)
  console.log(sumPositif)

 
  let livres=[
    {id :10,titre : 'POO',auteur :'RAMI',prix :300},
    {id :11,titre : 'JS ES6',auteur :'FAMI',prix :230},
    {id :12,titre : 'Algorithme',auteur :'KARIMI',prix :330},
    {id :13,titre : 'HTMH& CSS',auteur :'RAMI',prix :340}
  ]

    const titres = livres.map((livre)=>{
      return livre.titre;
    })

    const filterTitres = livres.filter((livre)=>{
      if(livre.auteur === "RAMI"){
        return true;
      }
    })
    const titresRami = filterTitres.map((titres)=>{
      return titres.titre;
    })
    const livre12 = livres.find((livre)=>{
      return livre.id === 12 ; 
    })
    const totalprix = livres.reduce((total,livre)=>{
      return   total +livre.prix;
    },0)

    const mesLivres = [...livres];
      
    
   console.log(titres);
   console.log(titresRami)
   console.log(livre12)
   console.log(totalprix)
   console.log(mesLivres)
  }, []); 
 */} 
  return (
    <BrowserRouter>
<Routes>
   <Route path='/post' element={<PostComment/>}/>
   <Route path='/comments' element={<Comment/>}/>
</Routes>
</BrowserRouter>
   // <div className="App">

   //   <button onClick={handleChange}>Change</button>
    //  {res.length > 0 && (
     
      ///  <div>
      //    <img src={res[Index].url} alt="Cat" />
     //   </div>
    ////  )}
   // </div>
  );
}

export default App;
