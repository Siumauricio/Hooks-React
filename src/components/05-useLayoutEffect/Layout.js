import React, { useLayoutEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";
import { useCounter } from "../../hooks/useCounter";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const pTag = useRef();
  useLayoutEffect(() => {
    console.log(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effects</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente Quote {counter}
      </button>
    </div>
  );
};
