import "./App.css";

import { useNavigate } from "react-router";
import VideoYouTube from "./view/VideoYoutube";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/basic-math/phep-cong")}>
        Phep Cong
      </button>
      <button onClick={() => navigate("/basic-math/phep-nhan")}>
        Phep Nhan
      </button>
      <button onClick={() => navigate("/basic-math/text-to-speech")}>
        Text To Speech
      </button>
      <div style={{ marginBottom: 50 }}></div>
      <VideoYouTube />
    </>
  );
}

export default App;