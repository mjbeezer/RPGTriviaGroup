export interface Player {
  Id: number;
  UserId: string;
  UserName: string;
  AvatarImage: Images;
  AvatarColor: string;
  GamesWon: number;
  Title: Title;
}

export interface Images {
  Id: number;
  ImageName: string;
}

export interface Title {
  Id: number;
  Title1: string;
  GamesWon: number;
}
