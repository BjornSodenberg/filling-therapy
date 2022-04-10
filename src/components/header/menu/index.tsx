import * as React from 'react';
import MenuItem from '../menu-item';

function Menu() {
  const menuLabels = ['Специалисты', 'Клиники', 'Партнерам'];
  return (
    <ul
      className="flex flex-row space-x-6"
    >
      {
          menuLabels.map((label) => <MenuItem label={label} />)
        }
    </ul>
  );
}

export default Menu;
