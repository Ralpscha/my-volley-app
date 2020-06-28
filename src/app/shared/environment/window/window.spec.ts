import { windowFactory, WindowToken } from './window.token';

describe('window', () => {

  it('should get window by windowFactory', () => {
    const result = windowFactory();
    expect(result !== null).toBe(true);
  });

  it('should retrieve an injectionToken', () => {
    expect(WindowToken !== null).toBe(true);
  });
});
