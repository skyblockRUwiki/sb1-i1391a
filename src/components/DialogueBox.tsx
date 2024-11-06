import React from 'react';
import { useGameStore } from '../store/useGameStore';

export const DialogueBox: React.FC = () => {
  const { currentScene, dialogueIndex, characters, advanceDialogue } = useGameStore();

  if (!currentScene) return null;

  const currentDialogue = currentScene.dialogue[dialogueIndex];
  const character = characters.find(c => c.id === currentDialogue.characterId);

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-black/80 text-white p-6 min-h-[200px]"
      onClick={advanceDialogue}
    >
      {character && (
        <div className="font-bold text-xl mb-2">{character.name}</div>
      )}
      <div className="text-lg">{currentDialogue.text}</div>
    </div>
  );
};