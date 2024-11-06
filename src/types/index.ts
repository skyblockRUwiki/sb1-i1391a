export interface Character {
  id: string;
  name: string;
  sprite: string;
}

export interface DialogueLine {
  characterId: string;
  text: string;
}

export interface Scene {
  id: string;
  background: string;
  dialogue: DialogueLine[];
  choices?: {
    text: string;
    nextSceneId: string;
  }[];
}