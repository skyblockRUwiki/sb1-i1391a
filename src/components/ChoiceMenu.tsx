import React from 'react';
import { useGameStore } from '../store/useGameStore';

export const ChoiceMenu: React.FC = () => {
  const { currentScene, setScene } = useGameStore();

  if (!currentScene?.choices) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-black/90 p-6 rounded-lg">
        {currentScene.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => setScene(choice.nextSceneId)}
            className="block w-full text-white hover:bg-white/20 p-4 rounded mb-2 last:mb-0"
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
};