import * as React from 'react';

function MenuItem({ label }: { label: string }) {
  return (
    <li className="
        hover:border-menu-hover
        hover:text-menu-hover
        hover:border-b-solid
        hover:border-b-2
        border-b-solid
        border-transparent
        border-b-2
      "
    >
      <a href="/">{label}</a>
    </li>
  );
}

export default MenuItem;
