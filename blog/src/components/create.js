import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title,setTitle] = useState("");
    const [body,setContent]=useState("");
    const [author,setAuthor]=useState("mario");
    const history = useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog = {title,body,author}
        console.log(blog)
        localStorage.setItem('blogData',blog.title)
        fetch("http://localhost:8000/blogs",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        history.push('/')
    }

    
    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center", color: "#f1356d" }}>Create a Blog</h2>
                <label style={{ marginLeft: "170px", marginTop: "2%", color: "#f1356d" }}> Blog Title </label>
                <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}
                    style={{ width: "60%", marginLeft: "20%", marginTop: "10px" }} placeholder="Enter Blog Title" />

                <label style={{ marginLeft: "170px", marginTop: "2%", color: "#f1356d" }}> Blog Content </label>
                <textarea className="form-control" value={body} onChange={(e)=>setContent(e.target.value)}
                    style={{ width: "60%", marginLeft: "20%", marginTop: "10px" }} placeholder="Enter Blog Content" >
                </textarea>

                <label style={{ marginLeft: "170px", marginTop: "2%", color: "#f1356d" }}> Author </label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}
                className="form-select" style={{ width: "60%", marginLeft: "20%", marginTop: "10px" }}>
                    <option selected>select Author</option>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

               <button className="Add">Add Blog</button> 
                
                <p>{author}</p>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;