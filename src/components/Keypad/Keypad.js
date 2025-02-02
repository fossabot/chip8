import React, { useEffect, useState } from 'react';
import './Keypad.css';

// 1	2	3	C
// 4	5	6	D
// 7	8	9	E
// A	0	B	F
// prettier-ignore
const keyMap = {
  '1': 0x1, '2': 0x2, '3': 0x3, '4': 0xc,
  q: 0x4, w: 0x5, e: 0x6, r: 0xd,
  a: 0x7, s: 0x8, d: 0x9, f: 0xe,
  z: 0xa, x: 0x0, c: 0xb, v: 0xf
};

// prettier-ignore
const keys = [ 0x1, 0x2, 0x3, 0xc, 0x4, 0x5, 0x6, 0xd, 0x7, 0x8, 0x9, 0xe, 0xa, 0x0, 0xb, 0xf ];

const Keypad = props => {
  const [pressedKeys, setPressedKeys] = useState({});

  const setKeyState = (key, pressed) => {
    const keyFromEvent = keyMap[key];
    const newState = Object.assign({}, pressedKeys);
    newState[keyFromEvent] = pressed;
    setPressedKeys(newState);

    if (pressed) {
      props.onKeydown(keyFromEvent);
    } else {
      props.onKeyup(keyFromEvent);
    }
  };

  const onKeydown = evt => setKeyState(evt.key, true);
  const onKeyup = evt => setKeyState(evt.key, false);

  useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('keyup', onKeyup);

    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keyup', onKeyup);
    };
  });

  return (
    <section className="Keypad">
      <h1>Keypad</h1>
      <div className="Keys">
        {keys.map(key => (
          <div
            key={key}
            className={'Key ' + (pressedKeys[key] === true ? 'PressedKey' : '')}
          >
            {key.toString(16).toUpperCase()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keypad;
