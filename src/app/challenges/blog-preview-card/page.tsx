import Image from "next/image";
import illustrationSvg from "../../../../public/illustration-article.svg";
import avatarWebp from "../../../../public/image-avatar.webp";

const BlogPreviewCardPage = () => {
  return (
    <body className="bg-[#F4D04E]">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[384px] bg-white border border-solid border-[#111111] rounded-[20px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex flex-col gap-6">
          <div>
            <Image
              alt="Illustration article"
              src={illustrationSvg}
              height={200}
              width={336}
              priority
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="border border-solid bg-[#F4D04E] rounded-[4px] self-start px-3 py-1 text-[14px] text-[#111111] leading-[150%] font-bold">
              Learning
            </div>

            <div className="text-[14px] leading-[150%] font-medium text-[#111111]">
              Published 21 Dec 2023
            </div>

            <h2 className="text-[24px] leading-[150%] font-extrabold text-[#111111]">
              HTML & CSS foundations
            </h2>

            <p className="text-[16px] leading-[150%] font-medium text-[#6b6b6b]">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>

          <div className="flex flex-row gap-3 items-center">
            <Image src={avatarWebp} alt="avatar" width={32} height={32} />
            <span className="text-[14px] text-[#111111] leading-[150%] font-bold">
              Greg Hooper
            </span>
          </div>
        </div>
      </div>
    </body>
  );
};

export default BlogPreviewCardPage;
