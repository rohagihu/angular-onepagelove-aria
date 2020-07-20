export interface IStage {
  headline: string;
  headlineOptions: [];
  subheadline: string;
  buttonLabel: string;
  buttonTarget: string;
}


export interface IService {
  headline: string;
  description: string;
  list: {name: string}[];
  priceStart: number;
  image?: string;
}
