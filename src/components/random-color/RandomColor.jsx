import React, { useEffect, useState } from 'react';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#00000000');

  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  };
  const handleRgbColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);
    setColor(`(rgb${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') handleRgbColor();
    else handleHexColor();
  }, [typeOfColor]);
  return (
    <div>
      <button onClick={() => setTypeOfColor('hex')} className=' border-2'>
        hex color
      </button>
      <button onClick={() => setTypeOfColor('rgb')} className='border-2'>
        rgb color
      </button>
      <button
        onClick={typeOfColor === 'hex' ? handleHexColor : handleRgbColor}
        className='border-2'
      >
        Generate color
      </button>
      <div
        style={{
          width: '100vw',
          backgroundColor: color,
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
        {color}
      </div>
    </div>
  );
};

export default RandomColor;
