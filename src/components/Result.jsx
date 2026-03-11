function Result({ restart, total, score }) {
  return (
    <>

      <div>
        <h1>Result Time</h1>
        <h1>{`You Scored ${score} out of ${total} Questions`}</h1>
        <button onClick={restart}>Restart</button>



      </div >
    </>
  )
}

export default Result
