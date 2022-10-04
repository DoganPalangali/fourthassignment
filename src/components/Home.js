import { useEffect, useState } from "react";

const Home = () => {
  const [title, updatetitle] = useState("Home Page");
  useEffect(() => {
    updatetitle("Home Page");
  }, []);
  return (
    <div>
      <h2>Welcome to {title}</h2>
      <p>This is the home page,there may not be anything but can be later. </p>
    </div>
  );
};

export default Home;
