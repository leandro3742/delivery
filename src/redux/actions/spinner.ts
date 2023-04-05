
export const OPEN_SPINNER = "OPEN_SPINNER";
export const CLOSE_SPINNER = "CLOSE_SPINNER"

export interface openSpinnerAction {
  type: typeof OPEN_SPINNER;
}

export function openSpinner(): openSpinnerAction {
  return {
    type: OPEN_SPINNER,
  }
};

export interface closeSpinnerAction {
  type: typeof CLOSE_SPINNER;
}

export function closeSpinner(): closeSpinnerAction {
  return {
    type: CLOSE_SPINNER,
  }
};


export type SpinnerActions = openSpinnerAction | closeSpinnerAction;
