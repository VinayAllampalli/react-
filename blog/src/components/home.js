
import { useState } from "react";
import BlogList  from "./bloglist"
const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    const handleClick = (e) => {
        console.log('hello vinay', e);
    }
      const handelClickAgain =(name,e)=>{
        console.log(name + " Ur learning React? I am happy for u if it is Yes")
      }  
      
      const handleDelete =(id)=>{
        const newBlogs = blogs.filter((blog)=>blog.id!==id)
        setBlogs(newBlogs)

      }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <button type="button" style={{ color: "White", backgroundColor: "#f1356d", borderRadius: "8px" }}
                onClick={handleClick}>click me</button>
            <button type="button" style={{color:"White",backgroundColor:"#f1356d",borderRadius:"8px"}}
            onClick={(e)=>{handelClickAgain("vinay",e)}}>click me Once More</button>
            <div className="card">
                <div className="card-body">
                    <label style={{ marginLeft: "170px", marginTop: "2%" }}>Email address :</label>
                    <input type="email" className="form-control" style={{ width: "60%", marginLeft: "20%", marginTop: "10px" }} id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
            </div>
           <BlogList blogs = {blogs} title="All Blogs" handleDelete={handleDelete}/>
           <BlogList blogs = {blogs.filter((blog)=>blog.author==="mario")} title="Mario BLogs"/>
        </div>

    );
}

export default Home;