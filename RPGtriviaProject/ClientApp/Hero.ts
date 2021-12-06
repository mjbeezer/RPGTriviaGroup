export interface Hero {
  Id: number;
  Name: string;
  UserId: number;
  HeroClass: number;
  HeroClassNavigation: HeroInfo;
}

export interface HeroInfo {
  Id: number;
  HealthPoints: number;
  Class: string;
  Ability: string;
  Bio: string;
  Image: string;
}
