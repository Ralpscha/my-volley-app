import {InjectionToken} from '@angular/core';

export const WindowToken = new InjectionToken('Window');

export function windowFactory(): Window {
  return window;
}
