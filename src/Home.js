
import BlogList from "./BlogList.js";
import useFetch from "./useFetch.js";
const Home=()=>{
  

    const {isLoading,error,blogs}=useFetch("http://localhost:4000/blogs");      
    return(

        <div className="home">
             {error && <div>{error}</div>} 
             {isLoading && <div>loading data ....</div>}
             {blogs && <BlogList blogs={blogs} name={"All blogs"}/>}

        </div>
    )
}
export default Home;