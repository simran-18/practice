import { useState, useEffect } from "react";
const InfiniteScroll = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
       if(window.innerHeight + window.scrollY >= document.body.scrollHeight){
        console.log("Reached bottom");
        fetchMemes();
       }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const fetchMemes = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://meme-api.com/gimme/10");
        const data = await response.json();
        console.log(data);
        setMemes((memes) => [
        ...(memes ?? []),
        ...data.memes
        ]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching memes:", error);
        setError("Failed to load memes");
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchMemes();
  }, []);
  
  if(error) return <div>Error: {error}</div>;
  return <div className="flex gap-4 flex-col items-center mt-4">
    {[...memes].map((meme, index) => (
        <div key={index} style={{marginBottom:"20px"}}>
        <h3>{meme.title}</h3>
        <img src={meme.url} alt={meme.title} style={{maxWidth:"500px"}}/>
      </div>
    ))}
   {loading && <div className="text-center w-full h-full">Loading...</div>}
  </div>;
};

export default InfiniteScroll;
