import { useState } from 'react';
const Create = () => {
  const [title, setTitle] = useState('hello');
  const [body, setBody] = useState('This is director');
  const [author, setAuthor] = useState('Karthik');
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
        <div>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Blog Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Christopher Mcquarrie">Christopher Mcquarrie</option>
            <option value="Rajamouli">Rajamouli</option>
          </select>
        </div>
        <button>Add Blog</button>
      </form>
    </div>
  );
};
export default Create;