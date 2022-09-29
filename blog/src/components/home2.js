import BlogList2 from "./bloglist2";
import useFetch from "./useFetch";

const Home2 = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { blogs && <BlogList2 blogs={blogs} /> }
  </div>
  )
}
 
export default Home2;