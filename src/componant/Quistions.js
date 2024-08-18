import Question from "./question";
function Quistions({ question,dispatch,answer }) {
  console.log(question);
  return (
    <div>
      
       <h4>{question.question}</h4> 
       <Question questions={question} dispatch={dispatch} answer={answer} /> 
    </div>
  );
}

export default Quistions;
