// styles
// import styles from "../styles";
import "../styles/loader.css";

const Loader = () => {
  return (
    <div
      className={` fixed top-0 left-0 center-in-screen w-screen h-screen grid z-[100] bg-secondary/50`}
    >
      <div
        className={`center-in-screen animate-pulse w-16 aspect-square bg-secondary transition-all rounded-full `}
      ></div>
    </div>
  );
};

export default Loader;
