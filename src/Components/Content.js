import { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://meme-api.herokuapp.com/gimme").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <main>
      <img className="img" src={data.url} alt="" />
      <div className="button">
      <button className="button-17"
        
        id="reload" onClick={() => { axios.get("https://meme-api.herokuapp.com/gimme").then((res) => { setData(res.data); }); }}
        >Click Me For MORE!</button>

      </div>
    </main>
  );
};

export default Content;

