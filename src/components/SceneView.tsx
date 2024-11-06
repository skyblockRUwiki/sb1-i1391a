import React from 'react';
import { useGameStore } from '../store/useGameStore';

export const SceneView: React.FC = () => {
  const { currentScene, characters, dialogueIndex } = useGameStore();

  if (!currentScene) return null;

  const currentDialogue = currentScene.dialogue[dialogueIndex];
  const currentCharacter = characters.find(c => c.id === currentDialogue.characterId);

  return (
    <div 
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${currentScene.background})` }}
    >
      {currentCharacter && (
        <div className="absolute bottom-[200px] left-1/2 transform -translate-x-1/2">
          <img 
            src={currentCharacter.sprite} 
            alt={currentCharacter.name}
            className="max-h-[600px]"
          />
        </div>
      )}
    </div>
  );
};