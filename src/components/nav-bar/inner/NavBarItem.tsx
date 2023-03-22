import { FunctionalComponent, h } from "@stencil/core";

export const NavBarItem: FunctionalComponent<{
  to: string;
  name: string;
}> = ({ to, name }) => {
  return (
    <li class="nav-bar-item flex h-full w-full cursor-pointer text-lg uppercase">
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
