import React from 'react'
import { CounterApp } from './useState/CounterApp.tsx';
import '../index.css';
import { counterCustomHook } from '../hooks/counterCustomHook.tsx';

const HookApp = () => {
  const counter = counterCustomHook();

  return (
    <div>
      {counter}
    </div>
  )
}

export default HookApp
