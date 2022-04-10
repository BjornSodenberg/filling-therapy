import * as React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Logo from 'images/Logo.png';
import Menu from './menu';

function Header() {
  return (
    <div className="bg-white flex flex-row justify-between items-center pt-8 pb-3">
      <img src={Logo} alt="" className="ml-16" />
      <Menu />
      <div className="flex flex-row space-x-4 items-center mr-16">
        <SearchIcon className="h-5 w-5" />
        <button
          type="button"
          className="bg-primary-button text-white p-4 rounded-full"
        >
          Войти/Регистрация
        </button>
      </div>

    </div>
  );
}

export default Header;
