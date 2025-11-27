import { useEffect, useState } from "react";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState("green");

  const durations = {
    green: 3000,
    yellow: 500,
    red: 4000,
  };

  const lights = ["green", "yellow", "red"];

  const lightColor = {
    green: "bg-green-700",
    yellow: "bg-yellow-400",
    red: "bg-red-600",
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setActiveLight((prev) => {
        const currentIndex = lights.indexOf(prev);
        const nextIndex = (currentIndex + 1) % lights.length;
        return lights[nextIndex];
      });
    }, durations[activeLight]);
    return () => clearTimeout(timeOut);
  }, [activeLight]);

  return (
    <div className="h-screen w-screen bg-black/5 flex justify-center items-center">
      <div className="flex flex-col gap-3 bg-black h-fit w-fit p-4 shadow-2xl rounded-2xl">
        {lights.map((light, index) => (
          <div
            key={index}
            className={`p-6 rounded-full transition-colors duration-300 ${
              activeLight === light ? lightColor[light] : "bg-gray-700"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TrafficLight;
