type LinkPropsType = Readonly<{
  name: string;
  href: string;
  internal?: boolean;
}>;

export default function StyledLink({ name, href }: LinkPropsType) {
  return (
    <a
      href={href}
      className="inline-block hover:underline cursor-pointer focus-visible"
    >
      {name}
    </a>
  );
}
