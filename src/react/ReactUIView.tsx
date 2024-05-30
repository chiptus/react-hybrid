import { UIView, UIViewProps } from '@uirouter/react';
import * as React from 'react';
import { debugLog } from '../debug';
import { UIRouterContextComponent } from './UIRouterReactContext';

const InternalUIView = UIView.__internalViewComponent;

export interface IReactUIViewProps extends UIViewProps {
  refFn: (ref: HTMLElement) => void;
}

export const ReactUIView = ({ refFn, ...props }: IReactUIViewProps) => {
  debugLog('react', 'ReactUIView', `?/${props['name']}`, '.render()', '');
  return (
    <UIRouterContextComponent parentContextLevel="3" inherited={false}>
      {/* @chiptus: original code sent a ref, not sure why, but I added an ignore */}
      {/* @ts-ignore */}
      <InternalUIView {...props} ref={refFn} />
    </UIRouterContextComponent>
  );
};
