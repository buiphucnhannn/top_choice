'use client';

import React, { useState } from 'react';

const h = React.createElement;

export default function Counter() {
  const [count, setCount] = useState(0);

  return h(
    'div',
    { className: 'p-6 rounded-md bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-sm' },
    h(
      'div',
      { className: 'flex items-center justify-between gap-4 mb-4' },
      h('span', { className: 'text-sm font-medium text-slate-400 uppercase tracking-wider' }, 'Demo Interactive State'),
      h('span', { className: 'px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' }, 'React.useState')
    ),
    h(
      'div',
      { className: 'flex items-center gap-4' },
      h(
        'button',
        {
          id: 'btn-decrement',
          onClick: () => setCount((prev) => prev - 1),
          className: 'w-10 h-10 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-all duration-200 border border-slate-700 active:scale-95 flex items-center justify-center text-lg'
        },
        '-'
      ),
      h(
        'div',
        { className: 'flex-1 text-center font-mono text-2xl font-bold text-indigo-400 bg-slate-950/60 py-1.5 px-4 rounded border border-slate-800' },
        `Count: ${count}`
      ),
      h(
        'button',
        {
          id: 'btn-increment',
          onClick: () => setCount((prev) => prev + 1),
          className: 'w-10 h-10 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-200 active:scale-95 flex items-center justify-center text-lg shadow-lg shadow-indigo-600/20'
        },
        '+'
      )
    )
  );
}
