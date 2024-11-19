import Link from "next/link";
import Image from "next/image";
// styles
import styles from "../styles";

const Logo = () => {
  return (
    <Link
      href="/"
      className={` ${styles.flexCenter} cursor-pointer w-4 md:w-7 aspect-square`}
    >
      <Image
        className={` w-5 md:w-7 aspect-square`}
        width={24}
        height={24}
        src={"/svgs/logo.svg"}
        alt={"Logo"}
      ></Image>
    </Link>
  );
};

export default Logo;
