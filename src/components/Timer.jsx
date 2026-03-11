import { useState, useEffect } from "react";
function Timer({ onExpire, questionIndex }) {
  const [time, setTime] = useState(5);

  useEffect(() => {
    setTime(5);

  }, [questionIndex])

  useEffect(() => {
    if (time === 0) {
      onExpire();
    }

  }, [time])


  useEffect(() => {

    const tiktok = setInterval(() => {
      setTime((t) => {
        if (t > 1) {


          return (t - 1);
        }
        if (t === 1) {
          return 0;
        }
        else {
          return t;
        }
      })
    }, 1000);
    return () => {
      clearInterval(tiktok);
    }

  }, [onExpire])



  return (
    <>

      <div>
        <p>Time Left : {time}</p>
      </div>
    </>
  )
}

export default Timer
