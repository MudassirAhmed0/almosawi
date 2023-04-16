import ReactPlayer from "react-player";
import "./Player.css";
import Navbar from "../components/Navbar";
import "../App.css";
export default function Live() {
  return (
    <div id="nayaRoot">
      <Navbar />
      <div className="background-wrapper ">
        <div className="player-wrapper">
          <ReactPlayer
            url="https://cdn3.wowza.com/5/aEtqbDdJeWFiL1lG/live2/myStream/playlist.m3u8"
            className="react-player"
            playing
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
}
