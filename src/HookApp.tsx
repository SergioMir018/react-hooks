import React from 'react'
import { CounterApp } from './components/useState/CounterApp.tsx';
import { CounterCustomHook } from './components/useState/counterCustomHook.tsx';
import { SimpleForm } from './components/useEffect/SimpleForm.tsx';
import { CustomHookSimpleForm } from './components/useEffect/CustomHookSimpleForm.tsx';
import MultipleCustomHooksComponent from './components/MultipleCustomHooks/MultipleCustomHooks.tsx';

const HookApp = () => {

  return (
    <div>
      <MultipleCustomHooksComponent />
    </div>
  )
}

export default HookApp
