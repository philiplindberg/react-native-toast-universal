import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ToastViewProps } from './Toast.types';

const NativeView: React.ComponentType<ToastViewProps> =
  requireNativeViewManager('Toast');

export default function ToastView(props: ToastViewProps) {
  return <NativeView {...props} />;
}
