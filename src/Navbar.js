const Navbar = () => {
return (
<nav className="navbar">
<h1>My App </h1>
<div className="links">
<a href="/"> Home </a>
<a href="/create" style={{
color:"white",
backgroundColor:'#e8507eff',
borderRadius: '8px'
}}> New Blog </a>
</div>
</nav>
);
}
export default Navbar;