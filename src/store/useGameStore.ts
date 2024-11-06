import { create } from 'zustand';
import { Scene, Character } from '../types';

interface GameState {
  currentScene: Scene | null;
  characters: Character[];
  scenes: Scene[];
  dialogueIndex: number;
  setScene: (sceneId: string) => void;
  advanceDialogue: () => void;
  addScene: (scene: Scene) => void;
  addCharacter: (character: Character) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentScene: null,
  characters: [],
  scenes: [],
  dialogueIndex: 0,

  setScene: (sceneId) => {
    const scene = get().scenes.find(s => s.id === sceneId);
    set({ currentScene: scene, dialogueIndex: 0 });
  },

  advanceDialogue: () => {
    const { currentScene, dialogueIndex } = get();
    if (currentScene && dialogueIndex < currentScene.dialogue.length - 1) {
      set({ dialogueIndex: dialogueIndex + 1 });
    }
  },

  addScene: (scene) => {
    set((state) => ({ scenes: [...state.scenes, scene] }));
  },

  addCharacter: (character) => {
    set((state) => ({ characters: [...state.characters, character] }));
  },
}));