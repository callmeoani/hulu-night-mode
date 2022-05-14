import React from "react";
import Thumnail from "./thumnail";
import FlipMove from "react-flip-move";
// import request from '../utility/request';

function Result({ results }) {
  return (
    <FlipMove className=" px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <div key={result.id}>
          <Thumnail result={result} />
        </div>
      ))}
    </FlipMove>
  );
}

export default Result;
