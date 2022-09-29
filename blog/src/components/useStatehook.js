import { useState } from "react";
const StateHooks = () => {
    const [name, setname] = useState("vinu")
    const [age, setAge] = useState(25)

    const [blogs,setBlog]=useState([
        {title:"React",DevelopedBy:"FaceBook",Status:"Learning",id:1},
        {title:"Angular",DevelopedBy:"Google",Status:"Completed",id:2},
        {title:"HTML & CSS & JS",DevelopedBy:"",Status:"Completed",id:3}
    ])
    const onChange = () => {
        setname("vinay")
        setAge(30)
    }
    return (
        <div className="useState">
            <p>Hi i am {name} and My age is {age}</p>
            <button type="button" style={{ color: "White", backgroundColor: "#f1356d", borderRadius: "8px" }}
                onClick={onChange}>click me</button>

        <div className="blog">
                <h1 style={{color:"#f1356d",textAlign:"center"}}>TABLE</h1>
                <div className="card" style={{marginLeft:"100px",width:"80%"}} >
                 <table className="table table-striped table-hover">
                 <thead style={{color:"#f1356d"}}>
                   <tr>
                     <th scope="col">#</th>
                     <th scope="col">title</th>
                     <th scope="col">DevelopedBy</th>
                     <th scope="col">Status</th>
                   </tr>
                 </thead>
                 <tbody>
                 {blogs.map((blog)=>(
                   <tr key={blog.id}>
                     <th scope="row" >{blog.id}</th>
                     <td>{blog.title}</td>
                     <td>{blog.DevelopedBy}</td>
                     <td>{blog.Status}</td> 
                   </tr>
                 ))}
                 </tbody>
               </table>
               </div>
        
        </div>
       
        </div>
    


    );
}
export default StateHooks;