import MenuItem from "./menuItem";

export default function MobileMenu() {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <MenuItem title="Главная" url="/" isMobile={true} />
        <MenuItem title="Блог" url="/blog" isMobile={true} />
        <MenuItem title="Новости" url="/news" isMobile={true} />
        <MenuItem title="Проекты" url="/projects" isMobile={true} />
      </div>
    </div>
  );
}
