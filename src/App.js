function Header() {
  return <h1>Welcome to My React App</h1>;
}
function Content() {
  return <p>This is a simple React application with multiple components.</p>;
}
function Footer() {
  return <footer>©2025 React Experiment 4 - React Components</footer>;
}
function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
    );
}
export default App;