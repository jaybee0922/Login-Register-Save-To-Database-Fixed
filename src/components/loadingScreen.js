import "../css/loadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="form">
        <div className="logo">
          <img src={require("./images/loading-screen.png")} alt="Loading" />
        </div>
        <div className="loading-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
