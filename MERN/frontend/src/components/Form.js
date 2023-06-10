import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Form() {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState([]);

  const registerPost = async (e) => {
    e.preventDefault();
    const newPost = { title, author, body, tags };
    console.log(JSON.stringify(newPost));
    const response = await fetch('http://localhost:3001/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    });
    console.log(response);
    const message = response.statusText;

    Swal.fire({ icon: 'success', title: message })
      .then(() => { window.location.reload(); });
  }

  return (
    <div className='container col-6'>
      <form className='border p-3 mt-1' onSubmit={registerPost}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" required onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input type="text" className="form-control" id="author" required onChange={e => setAuthor(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <textarea className="form-control" id="body" rows="4" required onChange={e => setBody(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Tags</label>
          <input type="text" className="form-control" id="tags" required onChange={e => setTags(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
