import React from 'react';

export default function Logo() {
  return (
    <div className="flex flex-col items-center bg-secondary px-4 py-2 rounded hover:shadow-md transition-shadow">
      <span className="text-primary text-2xl font-bold tracking-wider">GPMRM</span>
      <span className="text-primary text-xs tracking-[0.3em] uppercase">Modern Rice Mill</span>
    </div>
  );
}