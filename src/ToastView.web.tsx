import * as React from 'react';

import { ToastViewProps } from './Toast.types';

export default function ToastView(props: ToastViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
