import Image from "next/image";
import nextSvg from "../../public/next.svg";
import { NavLinks } from "@/components/NavLinks";

const Page = () => {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        <div>
          <h1 className="bg-red-400 text-red-200">Main Page</h1>
          <Image
            src={nextSvg}
            alt="logo nextjs"
            width={394}
            height={80}
            priority
          />
        </div>
      </body>
    </html>
  );
};

export default Page;
