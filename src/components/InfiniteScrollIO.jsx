import { useState, useEffect, useRef, useCallback } from "react";

const InfiniteScrollIO = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loaderRef = useRef(null);

  const fetchMemes = useCallback(async () => {
    if (loading) return; // prevent duplicate calls
    setLoading(true);

    try {
      const res = await fetch("https://meme-api.com/gimme/10");
      const data = await res.json();

      setMemes((prev) => [...prev, ...data.memes]);
    } catch (err) {
      setError("Failed to load memes");
    } finally {
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    fetchMemes(); // initial load
  }, [fetchMemes]);

  // 🚀 Intersection Observer Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !loading) {
          fetchMemes();
        }
      },
      { threshold: 1 } // triggers when element fully visible
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [fetchMemes, loading]);

  return (
    <div className="flex flex-col items-center mt-4 gap-4">
      {memes.map((meme, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{meme.title}</h3>
          <img src={meme.url} alt={meme.title} style={{ maxWidth: "500px" }} />
        </div>
      ))}

      {/* Sentinel element (Invisible loader trigger) */}
      <div ref={loaderRef} style={{ height: "40px" }} />

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
    </div>
  );
};

export default InfiniteScrollIO;
