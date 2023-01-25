import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  const remove=(todoItem) => {
    console.log("test", todoItem.id);
    var index = toDos.map((obj) => { return obj.id}).indexOf(todoItem.id);
    delete toDos[index];
    setTodos(toDos.filter((obj) => obj.id !== todoItem.id));
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center text-white mt-2">TO-DO List</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 buttonIn">
            <input
              type="text"
              value={toDo}
              maxLength={60}
              minLength={5}
              onChange={(e) => {
                if (e.target.value.length >= 60) {
                  alert("You can't enter more than 60 characters");
                  return;
                }

                setTodo(e.target.value);
              }}
              id="enter"
              className="form-control"
            />
            <button
              className="addBtn"
              onClick={() => {
                if (toDo.length < 5) {
                  alert("Please enter more than 5 characters");
                  return;
                }
                setTodos([
                  ...toDos,
                  { id: Date.now(), text: toDo, status: false },
                ]);
                setTodo("");
              }}
            >
              ADD
            </button>
          </div>
        </div>
      </div>

      {toDos.map((todoItem) => {
        return (
          <div className="container mt-4">
            <div className="lists mt-4">
              <div className="row mt-5">
                <div className="col-lg-6 buttonIn">
                  <p
                    className="Todo"
                    onClick={(e) => {
                      setTodos(
                        toDos.filter((obj) => {
                          if (obj.id === todoItem.id) {
                            if (obj.status === false) {
                              obj.status = true;
                              e.target.style.setProperty(
                                "text-decoration",
                                "line-through"
                              );
                              e.target.style.setProperty("color", "red");
                              e.target.style.setProperty(
                                "background-color",
                                "lightgrey"
                              );
                            } else {
                              obj.status = false;
                              e.target.style.setProperty(
                                "text-decoration",
                                "none"
                              );
                              e.target.style.setProperty("color", "black");
                              e.target.style.setProperty(
                                "background-color",
                                "white"
                              );
                            }
                          }
                          console.log(obj);
                          return obj;
                        })
                      );
                    }}
                  >
                    {todoItem.text}
                  </p>
                  <button
                    id="read"
                    value={todoItem.id}
                    onClick={() =>remove(todoItem)}
                  >
                    <img src="./trash.svg" alt="trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
