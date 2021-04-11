import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

type PropsTypes = {
  title: string;
  url: string;
  isMobile?: boolean;
};

export default function MenuItem({ title, url, isMobile = false }: PropsTypes) {
  const router = useRouter();
  const isCurrent = router.asPath === url;

  const menuItemClass = cn("px-3 py-2 rounded-md font-medium", {
    "bg-gray-900 text-white": isCurrent,
    "text-gray-300 hover:bg-gray-700 hover:text-white": !isCurrent,
    "block text-base": isMobile,
    "text-sm": !isMobile,
  });
  return (
    <Link href={url}>
      <a className={menuItemClass}>{title}</a>
    </Link>
  );
}
