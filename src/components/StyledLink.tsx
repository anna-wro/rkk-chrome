type LinkPropsType = Readonly<{
  name: string;
  href: string;
}>;

export default function StyledLink({ name, href }: LinkPropsType) {
  return (
    // https://stackoverflow.com/questions/16503879/chrome-extension-how-to-open-a-link-in-new-tab
    <a
      href={href}
      className="inline-block hover:underline cursor-pointer focus-visible"
    >
      {name}
    </a>
  );
}
