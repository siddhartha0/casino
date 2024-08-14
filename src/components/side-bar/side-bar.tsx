interface childPropTypes {
  id: number;
  icon: string;
  title: string;
}

interface sidebarPropTypes {
  header: string;
  menuItem: childPropTypes[];
}

export const SideBar = ({ header, menuItem }: sidebarPropTypes) => {
  return (
    <section className="group/casino flex flex-col gap-4 hover:animate-float ">
      <div className="flex place-items-center gap-2 cursor-pointer ">
        <header className="text-xl text-white font-semibold capitalize">
          {header}
        </header>
        <article className="text-2xl font-bold text-fav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g transform="rotate(-90 12 12)">
              <path
                stroke="currentColor"
                stroke-dasharray="8"
                stroke-dashoffset="8"
                stroke-linecap="round"
                stroke-width="2"
                d="M9 12L14 7M9 12L14 17"
                fill="currentColor"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="8;0"
                />
              </path>
            </g>
          </svg>
        </article>
      </div>

      {menuItem.map((child, i) => (
        <a
          className="flex hover:animate-jiggle  place-items-center gap-4 text-sm font-normal bg-[#24262B] rounded-lg text-white p-2 "
          href=""
          key={child.id + i}
        >
          <header>{child.icon}</header>
          <article>{child.title}</article>
        </a>
      ))}
    </section>
  );
};
