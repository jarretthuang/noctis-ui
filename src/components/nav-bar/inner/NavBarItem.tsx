import { FunctionalComponent, h } from "@stencil/core";

export const NavBarItem: FunctionalComponent<{
  to: string;
  name: string;
}> = ({ to, name }) => {
  return (
    <li class="flex h-full w-full cursor-pointer text-lg uppercase hover:bg-slate-500/80 hover:text-slate-50">
      <a
        class="flex h-full w-full select-none items-center px-8"
        href={to}
        rel="noopener noreferrer"
      >
        <div>{name}</div>
      </a>
    </li>
  );
};
