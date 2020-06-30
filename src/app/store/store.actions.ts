import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadAll = '[Store] Load All'
}


export class LoadAllAction implements Action {
  readonly type = ActionTypes.LoadAll;
}

export type StoreActions = LoadAllAction;
