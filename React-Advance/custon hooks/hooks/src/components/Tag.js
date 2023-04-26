import { useState } from "react";

import "../App.css";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState("false");
  const [tag, setTag] = useState("");

  // async function fetchData() {
  //   setLoading(true);
  //   const url = "https://api.imgflip.com/get_memes";
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.memes.length;
  //   const randomSource = Math.floor(Math.random() * imageSource);
  //   const numMemes = data.data.memes[randomSource].url;

  //   setGif(numMemes);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    fetchData();
  }

  function changeHandler(event) {
    setTag(event.target.value);
  }

  return (
    <div>
      <h1>Random Gif</h1>
      <div className="image">
        {loading ? <Spinner /> : <img src={gif} alt="gif" style={img} />}
      </div>
      <input className="input" onChange={changeHandler} value={tag} />

      <button onClick={clickHandler}>Generate</button>
    </div>
  );
};

const img = {
  height: 220,
  width: 250,
};

export default Tag;
