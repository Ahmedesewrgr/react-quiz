function startScreen({ numOfQuestions, dispatch,index }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quic!</h2>
      <h3> {numOfQuestions} questions to test your React mastry</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" ,paylod:index+1})}
      >
        let's start
      </button>
    </div>
  );
}

export default startScreen;
