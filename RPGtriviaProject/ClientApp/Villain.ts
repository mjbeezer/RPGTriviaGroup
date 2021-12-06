export interface Villain {
  Id: number;
  Name: string;
  Race: string;
  HealthPoints: number;
  Type: string;
  Ability: string;
  Image: Images;
}

export interface Images {
  Id: number;
  ImageName: string;
}
