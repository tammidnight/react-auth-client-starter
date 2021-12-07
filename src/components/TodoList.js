import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LottieControl from "./LottieControl";

function TodoList(props) {
  const [someJson, setJson] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://assets10.lottiefiles.com/packages/lf20_0etcyzow.json"
      );
      setJson(response.data);
    };

    getData();
  }, []);

  const { todos } = props;

  if (!todos.length || !someJson) {
    return <Spinner animation="grow" variant="dark" />;
  }

  return (
    <div>
      <LottieControl animation={someJson} width={300} height={300} />
      {todos.map((elem) => {
        return (
          <div>
            <Link to={`/todo/${elem._id}`}>{elem.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
