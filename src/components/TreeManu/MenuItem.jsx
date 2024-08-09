import React, { useState } from 'react';
import TreeMenu from './TreeMenu';
import { FaMinus, FaPlus } from 'react-icons/fa';

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getCurrentlabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  };

  console.log(displayCurrentChildren);

  return (
    <li className=' text-white ml-2 overflow-hidden'>
      <div>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            className=' cursor-pointer'
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.children] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <TreeMenu menus={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
