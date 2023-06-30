import React from 'react'
import { CounterApp } from './components/useState/CounterApp.tsx';
import { CounterCustomHook } from './components/useState/counterCustomHook.tsx';

const HookApp = () => {
  const counter = CounterCustomHook();

  return (
    <div>
      {counter}
    </div>
  )
}

export default HookApp
