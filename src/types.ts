export type PageLevel = 1 | 2 | 3;

export type PageNodeData = {
    label: string;
    level: PageLevel;
};

export type HomeSection = {
  id: string;
  title: string;
  content?: string;
};

export type AppState = {
    sections: HomeSection[];
};