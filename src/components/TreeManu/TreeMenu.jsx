import React from 'react';
import MenuItem from './MenuItem';

const TreeMenu = ({ menus = [] }) => {
  return (
    <ul className='flex flex-col gap-5 w-[10rem] bg-blue-500 mt-0 mb-0'>
      {menus && menus.length > 0
        ? menus.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

export default TreeMenu;
