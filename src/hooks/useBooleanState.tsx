/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer, useMemo, Dispatch, ChangeEvent } from 'react';
import noop from '../utils/noop';

const useBooleanState = (initialState = false, preventDefault = false) => {
  const [state, dispatch] = useReducer(booleanStateReducer, initialState);

  const actions = useMemo(
    () => ({
      on: makeAction('on', dispatch, preventDefault),
      off: makeAction('off', dispatch, preventDefault),
      toggle: makeAction('toggle', dispatch, preventDefault),
    }),
    [preventDefault],
  );

  return useMemo(() => [state, actions], [state, actions]);
};

const makeAction =
  (action: string, dispatch: Dispatch<any>, preventDefault: boolean) =>
  (event: ChangeEvent) => {
    if (preventDefault && event?.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    }

    dispatch(action);
  };

const booleanStateReducer = (state: any, action: string) => {
  switch (action) {
    case 'on':
      return true;
    case 'off':
      return false;
    case 'toggle':
      return !state;
    default:
      return !state;
  }
};

export const getInitialState = (initialState = false) => [
  initialState,
  {
    on: noop,
    off: noop,
    toggle: noop,
  },
];

export default useBooleanState;
