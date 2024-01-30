import "./App.css";
import TopNav from "./components/TopNav";
import { useEffect, useState } from "react";
import MainComponent from "./components/MainComponent";

function App() {
  const initialInputs = () => {
    const data = localStorage.getItem("userInput");
    return data
      ? JSON.parse(data)
      : {
          name: "jhon doe",
          userName: "jhondoe",
          profilePic:
            "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          socialPlatform: 1,
          content:
            "Got a love that can't be contained? Say it with a Nalgene Custom Bottle! 😍 Upload photos and graphics, or choose from our sweet stash to create one-of-a-kind gifts they'll cherish. Use code LUVYA for 20% off when you order two or more: http://bit.ly/NalgeneCustomTW",
          selectBg: 1,
          rounded: 10,
        };
  };
  const [userDetails, setUserDetails] = useState(initialInputs());
  useEffect(() => {
    localStorage.setItem("userInput", JSON.stringify(userDetails));
  }, [userDetails]);
  return (
    <div>
      <TopNav></TopNav>
      <MainComponent userDetails={userDetails}></MainComponent>
    </div>
  );
}

export default App;
