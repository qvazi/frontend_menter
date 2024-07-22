import Image from "next/image";
import avatarImg from "../../../../public/social-links-profile/avatar-jessica.jpeg";

const links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

const AvatarUser = () => {
  return (
    <Image
      src={avatarImg}
      alt="user avatar"
      width={100}
      height={100}
      className="rounded-[50%] self-center"
      priority
    />
  );
};

const UserInfo = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-[rgba(255,255,255,1)] text-[34px]">
        Jessica Randall
      </h1>
      <p className="text-[rgba(197,248,42,1)] text-[18px]">
        London, United Kingdom
      </p>
    </div>
  );
};

const UserSkills = () => {
  return (
    <p className="text-[rgba(255,255,255,1)] text-base text-center">
      "Front-end developer and avid reader."
    </p>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <a
          key={link}
          className="bg-[rgba(51,51,51,1)] rounded-xl gap-2 py-3 text-[rgba(255,255,255,1)] text-white hover:bg-[rgba(197,248,42,1)] hover:text-[rgba(20,20,20,1)] text-center"
          href="#"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default function Page() {
  return (
    <body className="bg-[rgba(20,20,20,1)]">
      <main className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-5 p-9 bg-[rgba(31,31,31,1)] w-96 rounded-3xl">
          <AvatarUser />
          <UserInfo />
          <UserSkills />
          <SocialLinks />
        </div>
      </main>
    </body>
  );
}
