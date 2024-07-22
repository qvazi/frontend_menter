import Link from "next/link";

const links: { href: string; label: string }[] = [
  {
    href: "/",
    label: "Index",
  },
  {
    href: "/time",
    label: "Time & Date",
  },
  {
    href: "/about",
    label: "About",
  },
];

export const NavLinks = () => {
  return (
    <nav>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
