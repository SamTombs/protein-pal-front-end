import Homepagevid from "../assets/video/Homepagevid.mp4";

const HomeVideo = () => {
  return (
    <>
      <video autoPlay loop muted className="videoPlayer">
        <source src={Homepagevid} type="video/mp4" ></source>
      </video>
    </>
  );
};

export default HomeVideo;
