import React, { useState } from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';

const LiveCodePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
      <PlayButton
        isPlaying={isPlaying}
        index={index}
        onClick={() => setIsPlaying(!isPlaying)}
      />

      <Song isPlaying={isPlaying} bpm={85} volume={-3}>
        <Track
          steps={[
            ['C3', 'E3'],
            ['E3', { name: 'F3', duration: '2n' }],
            ['D3', 'E3'],
            ['C3', 'E3'],
            ['E3'],
            ['E3'],
            ['D3', 'E3'],
            ['E3'],
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
              C3: '/audio/live-code/kick.wav',
              D3: '/audio/live-code/snare.wav',
              E3: '/audio/live-code/hat.wav',
              F3: '/audio/live-code/808.wav',
              G3: '/audio/live-code/hat-roll.wav',
            }}
          />
          <Effect type="freeverb" wet={0.1} />
        </Track>

        <Track
          // mute={true}
          steps={[
            ['G4', 'A#4', 'D4'], // G minor
            ['C4', 'D#4', 'G4'], // C minor
            ['G4', 'A#4', 'D4'], // G minor
            ['F4', 'A4', 'C4'], // F major
          ]}
          volume={-3}
          subdivision="1m" // 1 bar
        >
          <Instrument type="fmSynth"></Instrument>
          <Effect type="freeverb" wet={0.1} />
          <Effect type="feedbackDelay" wet={0.1} />
        </Track>

        <Track
          // mute={true}
          steps={[
            // { name: 'C3', duration: '1m' },
            null,
            null,
            null,
            { name: 'D3', duration: '2m' },
          ]}
          volume={-6}
          subdivision="2n"
        >
          <Instrument
            type="sampler"
            samples={{
              C3: '/audio/live-code/vocal-1.mp3',
              D3: '/audio/live-code/vocal-2.mp3',
            }}
          ></Instrument>
          <Effect type="feedbackDelay" wet={0.1} delayTime="2n" />
        </Track>

        <Track
          // mute={true}
          steps={[
            { name: 'C3', duration: '1m' },
            { name: 'C3', duration: '1m' },
            { name: 'C3', duration: '1m' },
            { name: 'C3', duration: '1m' },
          ]}
          volume={-6}
          subdivision="1n"
        >
          <Instrument
            type="sampler"
            samples={{
              C3: '/audio/live-code/viola.wav',
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

// -----------------------------------------------

// Start
// bpm: 110
// 8n 1/8 note, quaver
// 1 bar loop,

// Sampler instrument
// C3 is kick sample (wav or mp3)
// Nulls are rests
// ['C3', null, null, null, null, null, null, null]

// Press play, have to do it in browser to with user gesture
// to prevent audio triggering without explicit action

// Turn volume down to -3 decibels

// onStepPlay
// Add index to PlayButton

// Add snare
// D3: '/audio/live-code/snare.wav',
// ['C3', null, 'D3', null, 'C3', null, 'D3', null]

// Add syncopation
// ['C3', null, 'D3', 'C3', null, null, 'D3', null]

// Add hat
// E3: '/audio/live-code/hat.wav',
// Can layer notes by using nested array
// [['C3', 'E3'], ['E3'], ['D3', 'E3'], ['C3', 'E3'], ['E3'], ['E3'], 'D3', ['E3']]

// Add 808 bass
// F3: '/audio/live-code/808.wav',
// Try first note, too busy
// Try second
// ['E3', 'F3']
// Too short, but can change duration by using object
// { name: 'F3', duration: '4n' }

// Finally, add hat roll
// G3: '/audio/live-code/hat-roll.wav',
// Last note ['E3', 'G3']

// onStepPlay callback to set index

// Even add effects freeverb

// Tracks can be layered

// This one is of a browser synth
// Try amSynth, fmSynth
// Simple chord progression here
// subdivisions don't have to match, this is 1m, or each chord plays for 1 bar

// Lets add some vocals
// Try some delay effects
// Change to 16n

// Lastly, a viola loop

// -----------------------------------------------

// steps={[
//   ['C3', 'E3'],
//   ['E3'],
//   ['D3', 'E3'],
//   ['C3', 'E3'],
//   ['E3'],
//   ['E3'],
//   'D3',
//   ['E3'],
// ]}

// 4n = crotchet
// 8n = quaver

// Samples
// D3: '/audio/live-code/snare.wav',
// E3: '/audio/live-code/hat.wav',
// F3: '/audio/live-code/808.wav',
// G3: '/audio/live-code/hat-roll.wav',

// Two bar drums
// ['C3', 'E3'],
// [{ name: 'F3', duration: '1n' }, 'E3'],
// ['D3', 'E3'],
// ['C3', 'E3'],
// ['E3'],
// ['C3', 'E3'],
// ['D3', 'E3'],
// ['G3'],

// BPM 86
const finalDrums = [
  ['C3', 'E3'],
  [{ name: 'F3', duration: '1n' }, 'E3'],
  ['D3', 'E3'],
  ['E3'],
  ['E3'],
  ['C3', 'E3'],
  ['D3', 'E3'],
  ['E3'],
  ['C3', 'E3'],
  ['E3'],
  ['D3', 'E3'],
  ['C3', 'E3'],
  ['E3'],
  ['C3', 'G3'],
  ['D3', 'E3'],
  ['E3'],
];

// SGT_Loop_Melody_Viola_Darkmagic_170_G_Minor - viola

export default LiveCodePage;
