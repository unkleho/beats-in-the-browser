import React, { useState } from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const LiveCodeDemoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <PlayButton
        isPlaying={isPlaying}
        index={index}
        onClick={() => setIsPlaying(!isPlaying)}
      />

      <Song isPlaying={isPlaying} bpm={93} volume={-3}>
        <Track
          steps={[
            ['C3', 'E3'],
            ['E3', { name: 'F3', duration: '2n' }],
            ['D3', 'E3'],
            ['C3', 'E3'],
            ['E3'],
            ['E3'],
            ['D3', 'E3'],
            ['G3'],
          ]}
          volume={0}
          subdivision="8n" // 1/8 note AKA quaver
          onStepPlay={(_, index) => {
            setIndex(index);
          }}
        >
          <Instrument
            type="sampler"
            samples={{
              C3: '/audio/drums-that-knock-free-vol-1/Kicks/Nuckin Futs Kick.wav',
              D3: '/audio/drums-that-knock-free-vol-1/Snares + Claps + Rimshots/Pisht Snare.wav',
              E3: '/audio/drums-that-knock-free-vol-1/Hihats/ND Hihat.wav',
              F3: '/audio/drums-that-knock-free-vol-1/808s + Bass/Fuccin Swag 808 C.wav',
              G3: '/audio/drums-that-knock-free-vol-1/Hihats/ND Hihat Roll.wav',
            }}
          />
          <Effect type="freeverb" wet={0.1} />
        </Track>

        <Track
          // mute={true}
          steps={[
            ['C4', 'D#4', 'G4'], // C minor i
            ['G4', 'A#4', 'D4'], // G minor i
            ['F4', 'G#4', 'C4'], // F minor iv
            ['G#4', 'C4', 'D#4'], // Ab major VI
            // ['A#4', 'D4', 'F4'], // Bb major VII
          ]}
          volume={-3}
          subdivision="1m" // 1 bar
        >
          <Instrument type="amSynth"></Instrument>
          <Effect type="freeverb" wet={0.1} />
          <Effect type="feedbackDelay" wet={0.1} />
        </Track>

        <Track
          // mute={true}
          steps={[{ name: 'C3', duration: '4m' }, null, null, null]}
          volume={-3}
          subdivision="1n"
        >
          <Instrument
            type="sampler"
            samples={{
              C3: '/audio/drums-that-knock-free-vol-1/Melodic Loops/Bang Bang Melodic Loop 1 93 CMIN.wav',
            }}
          />

          <Effect type="feedbackDelay" wet={0.2} />
          <Effect type="autoFilter" wet={1} />
        </Track>
      </Song>
    </>
  );
};

const PlayButton: React.FC<{
  isPlaying: boolean;
  index?: number | null;
  onClick: Function;
}> = ({ isPlaying, index = null, onClick }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className="w-24 bg-secondary py-4 text-xl font-medium text-black"
        onClick={() => onClick()}
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>

      {index !== null && (
        <p className="ml-8 text-xl uppercase tracking-widest">
          <span className="text-grey-lighter">Index:</span>{' '}
          <span className="font-medium tabular-nums">{index}</span>
        </p>
      )}
    </div>
  );
};

export default LiveCodeDemoPage;
