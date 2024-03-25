import axios from "axios";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    console.log("Home");
    axios
      .get("https://sync-chat-server.vercel.app/")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return <div></div>;
};

export default Home;
