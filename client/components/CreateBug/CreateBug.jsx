import React, { useState } from "react";
import { useDrag } from "react-dnd";
import "./CreateBug.scss";

const CreateBug = ({ setShowModal }) => {
  return (
    <div className="bug-modal">
      <div className="createBugContent">
        <div className="createBugHeader">
          <h2>Create a New Bug</h2>
        </div>
        <form className="createBugForm">
          <div className="input">
            <label>Title:</label>
            <input type="text" id="title" name="title" />
          </div>
          <div className="input">
            <label>Product:</label>
            <input type="text" id="product" name="product" />
          </div>
          <div className="input">
            <label>Link/Repo:</label>
            <input type="text" id="repo" name="repo" />
          </div>
          <div className="input">
            <label>Priority Level:</label>
            <select id="plevel" name="plevel">
              <option value="p0">P0</option>
              <option value="p1">P1</option>
              <option value="p2">P2</option>
              <option value="p3">P3</option>
              <option value="p5">P4</option>
              <option value="p5">P5</option>
            </select>
          </div>
        </form>
        <button onClick={() => setShowModal(false)}>Create Bug</button>
      </div>
    </div>
  );
};

export default CreateBug;
