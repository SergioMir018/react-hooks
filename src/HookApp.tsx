import React from 'react'
import { CounterApp } from './components/useState/CounterApp.tsx';
import { CounterCustomHook } from './components/useState/counterCustomHook.tsx';
import { SimpleForm } from './components/useEffect/SimpleForm.tsx';
import { CustomHookSimpleForm } from './components/useEffect/CustomHookSimpleForm.tsx';

const HookApp = () => {

  return (
    <div>
      <CustomHookSimpleForm />
    </div>
  )
}

export default HookApp
