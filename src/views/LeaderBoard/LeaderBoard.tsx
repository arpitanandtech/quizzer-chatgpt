import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TypeLeaderBoard {
  name: string;
  title: string;
  count?: number;
}

function LeaderBoard() {
  const navigate = useNavigate();
  const [storage, setStorage] = useState<null | TypeLeaderBoard>(null);
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("payload") as string);
    setStorage(storage);
  }, []);
  const resetAndRedirect = () => {
    localStorage.removeItem("payload");
    navigate('/')
  }

  return (
    <div>
      <p className="mt-10 h6 text-center text-white">{'Thanks ' + storage?.name}</p>
      <br />
      <p className="mt-10 h6 text-center text-white">{'You have this much correct answers - '}</p>
      <p className="mt-4 h3 text-center text-white">{storage?.count}</p>
      <br />
      <button className="btn btn-block btn-danger mt-5" onClick={resetAndRedirect}>Go to Home</button>
    </div>
  )
}

export default LeaderBoard;