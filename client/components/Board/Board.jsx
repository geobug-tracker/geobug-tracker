import React from "react";
import { useQuery, gql } from "@apollo/client";
import Column from "./Column";
import "./Board.scss";

const Board = () => {
  const GET_ALL_BUGS = gql`
    query {
      bugs {
        title
        description
      }
    }
  `;
  const { loading, error, data, refetch } = useQuery(GET_ALL_BUGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occured!</p>;

  return (
    <div className="board">
      <div className="fields">
        <Column data={data} columnName={"new"} title={"New"} />
      </div>
      <div className="fields">
        <Column data={data} columnName={"todo"} title={"To Do"} />
      </div>
      <div className="fields">
        <Column data={data} columnName={"inProgress"} title={"In-Progress"} />
      </div>
      <div className="fields">
        <Column data={data} columnName={"review"} title={"Under Review"} />
      </div>
      <div className="fields">
        <Column data={data} columnName={"done"} title={"Completed"} />
      </div>
    </div>
  );
};

export default Board;
