export interface Player {
  id: number;
  userId: string;
  userName: string;
  avatarImage: Images;
  avatarColor: string;
  gamesWon: number;
  title: Title;
}

export interface Images {
  id: number;
  imageName: string;
}

export interface Title {
  id: number;
  title1: string;
  gamesWon: number;
}
