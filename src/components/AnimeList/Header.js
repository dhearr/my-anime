import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="font-bold text-2xl text-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="font-light text-sm underline text-primary hover:text-navbar"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
