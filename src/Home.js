import { useState } from "react";
const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:"Mirai", body:"Action Fantasy", author:"Karthik Ghattamneni", id:1},
        {title:"Mission Impossible 8", body:"Action Spy", author:"Christopher Mcquarrie", id:2},
        {title:"Jathiratnalu", body:"Comedy", author:"Anudeep KV", id:3}
    ]);
    return (
    <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            </div>
        ))
        }
        </div>
    );
}
export default Home;