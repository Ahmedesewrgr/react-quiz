import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./startScreen";
import Quistions from "./Quistions";
const initialstate = {
  questions: [],
  status: "loading",

  index: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceive":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,

        status: "error",
      };
    case "start":
      return {
        ...state,

        status: "active",
      };
    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
      };
    default:
      throw new Error("Action unknown");
  }
}
export default function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialstate
  );
  const numOfQuestions = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceive", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={numOfQuestions} 
          dispatch={dispatch} 
          index={index}/>
        )}
        {status === "active" && (
          <Quistions
          question={questions[index]}
            dispatch={dispatch}
            answer={answer}
          />
        )}
          
      </Main>
    </div>
  );
}
