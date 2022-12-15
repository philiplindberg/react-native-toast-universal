import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Toast.web.ts
// and on native platforms to Toast.ts
import ToastModule from './ToastModule';
import ToastView from './ToastView';
import { ChangeEventPayload, ToastViewProps } from './Toast.types';

// Get the native constant value.
export const PI = ToastModule.PI;

export function hello(): string {
  return ToastModule.hello();
}

export async function setValueAsync(value: string) {
  return await ToastModule.setValueAsync(value);
}

const emitter = new EventEmitter(ToastModule ?? NativeModulesProxy.Toast);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ToastView, ToastViewProps, ChangeEventPayload };
