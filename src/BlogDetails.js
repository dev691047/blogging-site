import { useParams} from "react-router";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails=()=>{
      const  {id}=useParams(); 
      const  {blogs,error,isLoading}=useFetch(`http://localhost:4000/blogs/${id}`)
      const history=useHistory();

     
     const handleDelete=()=>{
       fetch(`http://localhost:4000/blogs/${id}`,{method:'DELETE'}).then(()=>history.push('/'))
     }


    return(
  <div>
     <div>Blog details for {id}</div>
        <div className="blog-details" >
            {isLoading && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
                <article>
                 <h2>{blogs.title}</h2>
                 <p>written by:{blogs.author}</p>
                 <p>{blogs.body}</p>
                 <button onClick={handleDelete}>delete it</button>
                </article>)
        }
      
         </div>
    </div>
    )
}
export default BlogDetails;