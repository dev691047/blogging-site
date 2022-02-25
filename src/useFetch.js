// custom hooks to fetch data from url
import { useEffect,useState} from "react";
const useFetch=(url)=>{

    const[blogs,setBlogs]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{  fetch(url)
        .then(res=>{
           
            if(res.ok)
            return res.json()
            else
             throw Error("loading failed")
        })

        .then(data=>{
            setBlogs(data);
            setIsLoading(false)

        }).catch(error=>{
            setIsLoading(false)
            setError(error.message);
            console.log(error.message)
        })
    },1000)
    
    //clean up function for use effect
    return(
        console.log("cleanup")
    )

    },[url])
      
    return(
        {error,isLoading,blogs}
    )


}
export default useFetch;
  // const[blogs,setBlogs]=useState(null);
    // const [isLoading,setIsLoading]=useState(true);
    // const [error,setError]=useState(null);
  
    // const[blogs,setBlogs]=useState([
    //     {title:'state hooks',body:'lorem ipsum',author:'steve',id:1},
    //     {title:'class in reeact',body:'lorem ipsum',author:'john',id:2},
    //     {title:'css',body:'lorem ipsum',author:'tony',id:3}
    // ])
// asynchoronous rememeber 
    // const handleDelete=(id)=>{
    //     console.log("trigger delete");
    //     const newData=blogs.filter( blog => blog.id !==id);
    //     setBlogs(newData);
    // }
  
    // const [name,setName]=useState("deva") 
    // WHEN THEIR IS UPDATE IN STATE, RERENDERS HAPPENS AND WHEN REREMNDER HAPPENS THE useEffect WILL RAN
    // promises is used inside useffect

    // useEffect(()=>{
    //     setTimeout(()=>{  fetch('http://localhost:4000/blogs')
    //     .then(res=>{
           
    //         if(res.ok)
    //         return res.json()
    //         else
    //          throw Error("loading failed")
    //     })

    //     .then(data=>{
    //         console.log(data)
    //         setBlogs(data);
    //         setIsLoading(false)

    //     }).catch(error=>{
    //         setIsLoading(false)
    //         setError(error.message);
    //         console.log(error.message)
    //     })
    // },2000
    //     )  
    // },[])
    //we can have a dependency array whenm the change or update in the array happens then only the useeefect will ran;
    // fetch send request and return a promise