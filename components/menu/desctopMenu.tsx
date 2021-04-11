import MenuItem from "./menuItem";
import MenuLogo from "./menuLogo";

export default function DesctopMenu() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <MenuLogo />
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <MenuItem title="Главная" url="/" />
              <MenuItem title="Блог" url="/blog" />
              <MenuItem title="Новости" url="/news" />
              <MenuItem title="Проекты" url="/projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
