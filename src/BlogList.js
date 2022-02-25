import {Link} from "react-router-dom";
const BlogList=({blogs,name})=>{

 return(
       <div>
           <h2>{name}</h2>
    
       { blogs.map(blog=> {
       const {title,author,id}=blog;
         
         return(
             <div className="blog-view" key={id}>
                 <Link to={`/blogs/${id}`}>
                 <h2>{title}</h2>
                 <p>written by:{author}</p>
                 <p>read more......</p>          
                 </Link>
             </div>
         
       )}
       )}
       </div>
    )
 
 }
 export default BlogList;









 // const BlogList=(props)=>{

//    return(
//       <div>
//           <h2>{props.name}</h2>
   
//       { props.blogs.map(blog=>{
       
//         return(
//             <div className="blog-view" key={blog.id}>
//                 <Link to="/blogs">
//                 <h2>{blog.title}</h2>
//                 <p>written by:{blog.author}</p>
//                 {/* <>{blog.body}</> */}
//                 <p>read more......</p>
//                 <button onClick={()=>props.handleDelete(blog.id)}>Delete Blog!</button>
//                 </Link>
//             </div>
//         )
//     })}
//      </div>
//    )

// }
// export default BlogList;

// using object destructuring