import Link from "next/link";

export default function Page() {
  return (
    <body>
      <h1>Challenges</h1>
      <ul>
        <li>
          <Link href={"/"}>Index</Link>
        </li>
        <li>
          <Link href={"/challenges/blog-preview-card"}>Blog preview card</Link>
        </li>
        <li>
          <Link href={"/challenges/social-links-profile"}>
            Social links profile
          </Link>
        </li>
      </ul>
    </body>
  );
}
