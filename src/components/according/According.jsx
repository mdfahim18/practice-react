import React, { useState } from 'react';
import { data } from './data';

const According = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  console.log(multiple);
  const handleSingleSelection = (id) => {
    setSelected(id === selected ? null : id);
  };

  const handleMultipleSelection = (id) => {
    let cpyMultiple = [...multiple];
    const findIndexOfId = cpyMultiple.indexOf(id);
    if (findIndexOfId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfId, 1);
    setMultiple(cpyMultiple);
  };
  return (
    <section className=' flex flex-col gap-3 max-w-3xl'>
      <button
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
        className=' border-2 w-[13rem] mx-auto py-2 bg-red-500 text-white'
      >
        {enableMultipleSelection
          ? 'Disable Multiple Selection'
          : 'Eneble Multiple Selection'}
      </button>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className=' bg-blue-500 w-[500px] px-3 py-2'>
            <div className=' flex justify-between'>
              <h3>{item.question}</h3>
              <button
                onClick={
                  enableMultipleSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className=' text-2xl border-2 px-3'
              >
                +
              </button>
            </div>
            {enableMultipleSelection
              ? multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
              : selected === item.id && <div>{item.answer}</div>}
          </div>
        ))
      ) : (
        <h1>No data found</h1>
      )}
    </section>
  );
};

export default According;
