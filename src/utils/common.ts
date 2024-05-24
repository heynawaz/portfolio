import { ComponentType, lazy, LazyExoticComponent } from 'react';

type LazyLoadType = <T extends ComponentType<any>>(path: string, namedExport?: string) => LazyExoticComponent<T>;

export const lazyLoad: LazyLoadType = (path, namedExport) => {
  return lazy(() => {
    const promise = import(path);
    if (namedExport == null) {
      return promise.then(module => ({ default: module.default }));
    } else {
      return promise.then(module => ({ default: module[namedExport] }));
    }
  });
};

export function wait(time: number) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
