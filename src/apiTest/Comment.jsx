import React, { useEffect, useState } from 'react';

import axios from 'axios';
const Comment = ({id}) => {
    const [comment,setComment] = useState([])
    
    useEffect(()=>{
        const getData = async () => {
            try {
              const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); 
              setComment(response.data);
            } catch (error) {
              console.error('Request Error:', error);
            } 
          }
         
    getData() 
    
    },[id])


    
  return (
<div>
    {comment.map((data)=>(
        <div key={data.id}>
    {/* {data.postId}*/}
   <h2 className='font-bold'>{data.name}: {data.postId}</h2> 
   <p>{data.body}</p>
  </div>
  ))}
</div>
  )
}

export default Comment
