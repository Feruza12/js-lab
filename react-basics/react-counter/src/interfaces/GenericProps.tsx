export interface GenericProps {
  count: number;
  timerActivated: boolean;
  toggleTimer: () => void;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
}
