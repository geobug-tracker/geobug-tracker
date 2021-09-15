import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import './CreateBug.scss';

const CREATE_BUG_MUTATION = gql`
  mutation AddBug($addBugInput: inputBug) {
    addBug(input: $addBugInput) {
      id
      description
    }
  }
`;

const CreateBug = ({ setShowModal, refetch }) => {
  const [title, setTitle] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [linkRepo, setLinkRepo] = useState('');
  const [priority, setPriority] = useState('P5');

  const [addBug, { data, loading, error }] = useMutation(CREATE_BUG_MUTATION);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeProduct = (event) => {
    setProduct(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleChangeLinkRepo = (event) => {
    setLinkRepo(event.target.value);
  };

  const handlesetPriority = (event) => {
    setPriority(event.target.value);
  };

  const handleCreateBug = async () => {
    const bugs = await addBug({
      variables: {
        addBugInput: {
          description,
          linkRepo,
          title,
          priority,
          product,
          status: 'new',
          userId: 1,
        },
      },
    });

    setShowModal(false);
    refetch();
  };

  return (
    <div className="bug-modal">
      <div className="createBugContent">
        <div className="createBugHeader">
          <h2>Create a New Bug</h2>
        </div>
        <form className="createBugForm">
          <div className="input">
            <label>Title:</label>
            <input type="text" id="title" name="title" value={title} onChange={handleChangeTitle} />
          </div>
          <div className="input">
            <label>Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>
          <div className="input">
            <label>Product:</label>
            <input
              type="text"
              id="product"
              name="product"
              value={product}
              onChange={handleChangeProduct}
            />
          </div>
          <div className="input">
            <label>Link/Repo:</label>
            <input
              type="text"
              id="repo"
              name="repo"
              value={linkRepo}
              onChange={handleChangeLinkRepo}
            />
          </div>
          <div className="input">
            <label>Priority Level:</label>
            <select id="plevel" name="plevel" value={priority} onChange={handlesetPriority}>
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
  );
};

export default CreateBug;
