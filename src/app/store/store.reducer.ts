export interface ReducerStoreState {
  headline: string;
  subheadline: string;
  text: string;
  by: string;
}

export const initialState: ReducerStoreState = {
  headline: '',
  subheadline: '',
  text: '',
  by: ''
};
