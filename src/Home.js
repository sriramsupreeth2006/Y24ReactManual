import { useState } from "react";
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:"Mirai", body:"Action Fantasy", author:"Karthik Ghattamneni", id:1},
        {title:"Mission Impossible 8", body:"Action Spy", author:"Christopher Mcquarrie", id:2},
        {title:"Jathiratnalu", body:"Comedy", author:"Anudeep KV", id:3}
    ]);
    const handleDelete = (id) => {
        const newBlogs=blogs.filter(blog =>
blog.id !== id); 
        setBlogs(newBlogs);
}
    return (
    <div className="home">
        < BlogList blogs={blogs} title="All Blogs!" />
        < BlogList blogs={blogs.filter((blog) => blog.author ===
'Karthik Ghattamneni')} title="Karthik's blogs" handleDelete={handleDelete} />
     </div>
        );       
}
export default Home;