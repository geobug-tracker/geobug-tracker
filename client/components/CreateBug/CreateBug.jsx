import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";

import './CreateBug.scss';

const CREATE_BUG_MUTATION = gql`
mutation AddBug($addBugInput: inputBug) {
    addBug(input: $addBugInput) {
        id
        description
    }
}
`;

const ADD_TODO = gql`
  mutation AddTodo($text: String!) {
    addTodo(text: $text) {
      id
      text
    }
  }
`;
const CreateBug = ({ setShowModal }) => {
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('P5');

  const [createBug, { data, loading, error }] = useMutation(CREATE_BUG_MUTATION);  

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  
  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  }
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  }

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  }

  const handleSetPriorityLevel = (event) => {
    setPriorityLevel(event.target.value);
  }

  const handleCreateBug = () => {
    // Create the mutation itself using GQL.
    // Make a mutation to the backend with all of the data.
    // Await until the mutation completes.
    // When the mutation completes, call our refetch function from the Board component.
    setShowModal(false)
  }

  return (
    <div className="bug-modal">
      <div className="createBugContent">
        <div className='createBugHeader'>
          <h2>Create a New Bug</h2>
        </div>
        <form className='createBugForm'> 
          <div className='input'>
            <label>Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={handleChangeTitle} />
          </div>
          <div className="input">
            <label>Description:</label>
            <input type="text" id="description" name="description" value={description} onChange={handleChangeDescription} />
          </div>
          <div className='input'>
            <label>Product:</label>
            <input type="text" id="product" name="product" value={product} onChange={handleChangeProduct} />
          </div>
          <div className='input'>
            <label>Link/Repo:</label>
            <input type="text" id="repo" name="repo" value={link} onChange={handleChangeLink}/>
          </div>
          <div className='input'>
            <label>Priority Level:</label>
            <select id="plevel" name="plevel" value={priorityLevel} onChange={handleSetPriorityLevel}>
              <option value="p0">P0</option>
              <option value="p1">P1</option>
              <option value="p2">P2</option>
              <option value="p3">P3</option>
              <option value="p5">P4</option>
              <option value="p5">P5</option>
            </select>
          </div>
        </form>
        <button onClick={handleCreateBug}>Create Bug</button>
      </div>
    </div>
  )
}

export default CreateBug