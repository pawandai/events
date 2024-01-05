import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col gap-4 p-5 flex-center wrapper flex-between text-center sm:flex-row">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Events"
            width={128}
            height={38}
          />
        </Link>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
