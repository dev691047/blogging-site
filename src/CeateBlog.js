import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react/cjs/react.development";


const CreateBlog=()=>{

const[title,setTitle]=useState('');
const[author,setAuthor]=useState('jim');
const [body,setBody]=useState('');
const history=useHistory();

const handleSubmit=(e)=>{
    e.preventDefault();
    fetch("http://localhost:4000/blogs",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,author,body})
    }).then(()=>{
        //programatic redirect
        history.push('/')
    })
}

return(
    <div className="create">
        <h2>write your blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input
            type="text"
             required 
             onChange={(e)=>{setTitle(e.target.value)}} 
             value={title}>            
             </input>

            <label>Author</label>
           <select onChange={(e)=>{setAuthor(e.target.value)}} value={author}>
               <option value="jim">jim</option>
               <option value="micheal ">micheal</option>
               <option value="dwight">dwight</option>
           </select>

           <label>Write here</label>
           <textarea required onChange={(e)=>{setBody(e.target.value)}} value={body} >
           
           </textarea>
           <button type="submit">Add blog</button>
        </form>
    </div>
)
}

export default CreateBlog;