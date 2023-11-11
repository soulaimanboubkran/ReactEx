import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Comment from './Comment';

const PostComment = () => {
    const [res,setRes] = useState([])
    const [showComments, setShowComments] = useState({});
 
useEffect(()=>{
    const getData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
          setRes(response.data);
        } catch (error) {
          console.error('Request Error:', error);
        }

        
      }
     
getData() 

},[])
console.log(res)   



const handleClick = (id) => {
  setShowComments((prevShowComments) => ({ ...prevShowComments, [id]: !prevShowComments[id] }));
};

  return (
<div>
    {res.map((res)=>(
    <div key={res.id}>
       <div className='flex cursor-pointer '>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z" />
                </svg>
          <h4 className=""  onClick={()=>handleClick(res.id)}>{res.title}</h4>
       </div>   
          {showComments[res.id] && <Comment id={res.id} />}
    </div>
      ))}
</div>
  )
}

export default PostComment
