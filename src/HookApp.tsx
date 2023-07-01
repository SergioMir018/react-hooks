import React from 'react'
import { CounterApp } from './components/useState/CounterApp.tsx';
import { CounterCustomHook } from './components/useState/counterCustomHook.tsx';
import { SimpleForm } from './components/useEffect/SimpleForm.tsx';

const HookApp = () => {
  const counter = CounterCustomHook();

  return (
    <div>
      <SimpleForm />
    </div>
  )
}

export default HookApp
