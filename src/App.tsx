import React from 'react';
import { SceneView } from './components/SceneView';
import { DialogueBox } from './components/DialogueBox';
import { ChoiceMenu } from './components/ChoiceMenu';
import { useGameStore } from './store/useGameStore';

// Example data initialization
const exampleScene = {
  id: 'scene1',
  background: 'https://placekitten.com/1920/1080',
  dialogue: [
    {
      characterId: 'char1',
      text: 'Welcome to the Visual Novel Constructor!'
    },
    {
      characterId: 'char1',
      text: 'Click anywhere to advance the dialogue.'
    }
  ]
};

const exampleCharacter = {
  id: 'char1',
  name: 'Guide',
  sprite: 'https://placekitten.com/400/800'
};

function App() {
  const { addScene, addCharacter, setScene } = useGameStore();

  React.useEffect(() => {
    addScene(exampleScene);
    addCharacter(exampleCharacter);
    setScene('scene1');
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <SceneView />
      <DialogueBox />
      <ChoiceMenu />
    </div>
  );
}

export default App;