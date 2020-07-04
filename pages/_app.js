import "../styles/tailwind.css";
import "../styles/overide.css";
// import "animate.css/animate.min.css";
import Navbar from "../components/Navbar";
function App({ Component, pageProps }) {
  return (
    <div
      className=" h-screen bg-black"
      // style={{
      //   backgroundImage: "url(https://bit.ly/31Lhzv5)",
      //   backgroundColor: "rgba(125,125,125)",
      // }}
    >
      <div className=" top-0">
        <Navbar />
      </div>
      <Component {...pageProps} />;
    </div>
  );
}
export default App;
