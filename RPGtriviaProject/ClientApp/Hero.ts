export interface Hero {
  id: number;
  name: string;
  userId: number;
  heroClass: number;
  heroClassNavigation: HeroInfo;
}

export interface HeroInfo {
  id: number;
  healthPoints: number;
  class: string;
  ability: string;
  bio: string;
  image: string;
}
