import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";

export default function CreateEvent() {
  const stateInitialForms = {
    title: "",
    description: "",
    // performers: [],
    // imagen: "",
    // date: "",
    // time: "",
    // stock: "",
  };

  const [input, setInput] = useState(stateInitialForms);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEvent(input));
    setInput({
      title: "",
      description: "",
    //   performers: [],
    //   imagen: "",
    //   date: "",
    //   time: "",
    //   stock: "",
    });
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <Link to="/home">
          <button>Back to main page</button>
        </Link>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={input.title}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleInputChange(e)}
          />

          {/* <label>Performers:</label>
          <input
            type="text"
            name="performers"
            value={input.performers}
            onChange={(e) => handleInputChange(e)}
          /> */}

          {/* <label>Imagen:</label>
          <input
            type="text"
            name="imagen"
            value={input.imagen}
            onChange={(e) => handleInputChange(e)}
          /> */}

          <button type="submit">Create Game</button>
        </form>
      </div>
    </div>
  );
}
