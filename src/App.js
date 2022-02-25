
import './App.css';
import Navbar  from './Navbar.js';
import Home from './Home.js'
import CreateBlog from './CeateBlog';
import { BrowserRouter,Route, Switch } from "react-router-dom";
import BlogDetails from './BlogDetails';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter> 
         <Navbar/>
          <div className='content'>
           <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/create">
               <CreateBlog/>
            </Route>
            {/* {*route parameter params this id is in blogdetails*} */}
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
          </div>
      </BrowserRouter>
      </div>

  );
}

export default App;






















// let name='john';
  // let age=34;
  // let hobbies=['reading','writing','sports'];
  // let education={school:"dav",collage:"lpu"};  
  // it will not work because react cant make object 
  // let onlineStatus=true;

  //  const handleClick=(e)=>{
  //    console.log("handler",e);
  //  }
  
  //  const[name,setName]=useState('john');


  //  function handleClick(){
  //   setName('dev')
  //  }
  //                                or
  //  const handleClick=()=>{
  //          setName('dev');
  //  }

