// styles
import styles from "@/styles/index";

const Header = () => {
  return (
    <header className={` relative ${styles.flexCenterStart} z-30 `}>
      <div
        className={` w-full bg-primary ${styles.Xsmall} text-center text-secondary py-1`}
      >
        © {new Date().getFullYear()} Project Name.
      </div>
    </header>
  );
};

export default Header;
