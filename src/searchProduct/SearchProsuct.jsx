import axios from 'axios';
import React, { useEffect, useState } from 'react'







export default function SearchProsuct() {
    const [res,setRes]=useState([])
    const [input ,setInput]=useState('');
    useEffect(()=>{
      
    
    },[input])


const handleSubmit= async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://dummyjson.com/products/search?q=${input}`); 
      setRes(response.data.products);
    } catch (error) {
      console.error('Request Error:', error);
    }

    
  }
 
console.log(res)
console.log(input)

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4">
    <form onSubmit={handleSubmit} className="flex items-center">
      <label className="mr-4">Search products:</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded px-2 py-1 mr-4"
      />
      <button type="submit" className="  px-4 py-2 rounded">
        Search
      </button>
    </form>

    {res.length > 0 &&
      res.map((item) => (
        <>
        <div key={item.id} className="mt-4 mb-4 ">
        <h1 className="font-bold text-xl">{item.title}</h1>
        <p className="text-gray-600"><span className='font-bold'>Brand:</span> {item.brand}</p>
        <p className="text-gray-600"><span className='font-bold'>Category:</span> {item.category}</p>
        <p className="text-gray-600"><span className='font-bold'>Description:</span> {item.description}</p>
        <p className="text-gray-600"><span className='font-bold'>Price:</span> ${item.price}</p>
        <img src={item.thumbnail} alt={item.title} className="mt-2 rounded" />
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      </>
      ))}
  </div>
  )
}
