import React from 'react'
import { CounterApp } from './useState/CounterApp.tsx';
import '../index.css';
import { CounterCustomHook } from './useState/counterCustomHook.tsx';

const HookApp = () => {
  const counter = CounterCustomHook();

  return (
    <div>
      {counter}
    </div>
  )
}

export default HookApp
