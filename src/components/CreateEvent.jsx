import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent } from "../redux/actions/actions";
import "./CreateEvent.css";
export function validate(input) {
  let errors = {};

  if (!input.title) {
    errors.title = "title is require";
  }
  if (!input.description) {
    errors.description = "Please description is require";
  }
  if (!input.performers) {
    errors.performers = " Please performers ir require";
  }
  if (!input.imagen) {
    errors.imagen = "Please image is require";
  }
  if (!input.date) {
    errors.date = "Please enter the date";
  }
  if (!input.time) {
    errors.time = "Please insert a valid time";
  }
  if (!input.stock) {
    errors.stock = "Please, insert how many tickets you want to buy";
  }

  return errors;
}

export default function CreateEvent() {
  const stateInitialForms = {
    title: "",
    description: "",
    performers: [],
    imagen: "",
    date: "",
    time: "",
    stock: "",
  };

  const [input, setInput] = useState(stateInitialForms);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.title === "" &&
      input.description === "" &&
      input.performers === "" &&
      input.imagen === "" &&
      input.date === "" &&
      input.time === "" &&
      input.stock === ""
    ) {
      alert("Please complete the form");
    } else {
      dispatch(createEvent(input));
      alert("New event added successfully!");
      setInput({
        title: "",
        description: "",
        performers: [],
        imagen: "",
        date: "",
        time: "",
        stock: "",
      });
    }
  };

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
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
          {errors.title && <p className="danger">{errors.title}</p>}

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={input.description}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.description && <p className="danger">{errors.description}</p>}
          <label>Performers:</label>
          <input
            type="text"
            name="performers"
            value={input.performers}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.performers && <p className="danger">{errors.performers}</p>}
          <label>Imagen:</label>
          <input
            type="text"
            name="imagen"
            value={input.imagen}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.imagen && <p className="danger">{errors.imagen}</p>}
          <label>Date:</label>
          <input
            type="text"
            name="date"
            value={input.date}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.date && <p className="danger">{errors.date}</p>}
          <label>Time:</label>
          <input
            type="text"
            name="time"
            value={input.time}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.time && <p className="danger">{errors.time}</p>}
          <label>Tickets:</label>
          <input
            type="text"
            name="stock"
            value={input.stock}
            onChange={(e) => handleInputChange(e)}
          />
          {errors.stock && <p className="danger">{errors.stock}</p>}
          <button type="submit">Create Game</button>
        </form>
      </div>
    </div>
  );
}
