import DesctopMenu from "./desctopMenu";
import MobileMenu from "./mobileMenu";

export default function Menu() {
  return (
    <nav className="bg-gray-800">
      <DesctopMenu />
      <MobileMenu />
    </nav>
  );
}
