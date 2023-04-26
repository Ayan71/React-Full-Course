import { useEffect, useState } from "react";
import axios from "axios";

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData() {
    setLoading(true);
    const url = "https://api.imgflip.com/get_memes";
    const { data } = await axios.get(url);
    const imageSource = data.data.memes.length;
    const randomSource = Math.floor(Math.random() * imageSource);
    const numMemes = data.data.memes[randomSource].url;

    setGif(numMemes);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { gif, loading, fetchData };
};

export default useGif;
