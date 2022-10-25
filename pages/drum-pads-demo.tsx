import React, { useState } from 'react';
import { Instrument, MidiNote, Song, StepNoteType, Track } from 'reactronica';
import { useWebMidi } from '../shared/hooks/use-web-midi';

const padColours = {
  pink: {
    default: 'bg-pink-600/80 text-gray-900',
    active: 'bg-pink-600 text-gray-900',
  },
  green: {
    default: 'bg-green-600/80 text-gray-900',
    active: 'bg-green-600',
  },
  indigo: {
    default: 'bg-indigo-600/80 text-gray-900',
    active: 'bg-indigo-600',
  },
  yellow: {
    default: 'bg-yellow-600/90 text-gray-900',
    active: 'bg-yellow-600 text-gray-800',
  },
  purple: {
    default: 'bg-purple-700/70 text-gray-900',
    active: 'bg-purple-700 text-gray-900',
  },
  cyan: {
    default: 'bg-cyan-500/60 text-gray-900',
    active: 'bg-cyan-500 text-gray-800',
  },
} as const;

type PadColour = keyof typeof padColours;

const triggerFingerMap: MidiNote[] = [
  'C#3', // First row
  'A3',
  'D#3',
  'F3',
  'G#3', // Second row
  'D#2',
  'F#2',
  'A#2',
  'D3', // Third row
  'C3',
  'A2',
  'F2',
  'C2', // Fourth row
  'D2',
  'E2',
  'C#2',
];

const sampleMap = triggerFingerMap;

type DrumPadsProps = {
  pads: {
    id: string | number;
    note: MidiNote;
    name?: string;
    colour: PadColour;
    extraNotes?: MidiNote[];
  }[];
  activePads?: {
    note: MidiNote;
  }[];
  className?: string;
  onPadDown?: (note: MidiNote) => void;
  onPadUp?: (note: MidiNote) => void;
};

const DrumPads: React.FC<DrumPadsProps> = ({
  pads = [],
  activePads = [],
  className,
  onPadDown,
  onPadUp,
}) => {
  return (
    <div className={['grid grid-cols-4 gap-[4px]', className || ''].join('')}>
      {pads.map((pad) => {
        const isSelected = Boolean(
          activePads.find((activePad) => {
            return activePad.note === pad.note;
          })
        );

        const defaultColour = padColours[pad.colour]?.default || 'bg-grey';

        return (
          <button
            className={[
              'flex aspect-square flex-col p-2 transition-transform duration-100',
              isSelected ? padColours[pad.colour]?.active : defaultColour,
              isSelected ? 'scale-105 shadow-lg' : '',
            ].join(' ')}
            onMouseDown={() => onPadDown?.(pad.note)}
            onMouseUp={() => onPadUp?.(pad.note)}
            key={pad.note}
          >
            <span className="mr-auto text-sm font-bold text-white/80">
              {pad.name}
            </span>
            <span className="mt-auto ml-auto text-sm font-normal">
              {pad.note}
            </span>
          </button>
        );
      })}
    </div>
  );
};

const DrumPadsDemoPage = () => {
  const [notes, setNotes] = useState<StepNoteType[]>([]);

  return (
    <div className="flex min-h-screen bg-black p-8">
      <div className="m-auto w-full max-w-xl bg-grey p-2">
        <div className="bg-black p-1">
          <DrumPads
            pads={[
              { id: 0, note: sampleMap[0] },
              { id: 1, note: sampleMap[1], name: 'Vocal 2', colour: 'yellow' },
              { id: 2, note: sampleMap[2], name: 'Vocal 3', colour: 'yellow' },
              { id: 3, note: sampleMap[3], name: 'Piano', colour: 'pink' },
              { id: 4, note: sampleMap[4], name: 'Kick', colour: 'cyan' },
              {
                id: 5,
                note: sampleMap[5],
                name: 'Open Hat',
                colour: 'purple',
              },
              { id: 6, note: sampleMap[6], name: 'Kick', colour: 'cyan' },
              { id: 7, note: sampleMap[7], name: '808', colour: 'indigo' },
              { id: 8, note: sampleMap[8], name: 'Hat', colour: 'purple' },
              { id: 9, note: sampleMap[9], name: 'Snare', colour: 'pink' },
              { id: 10, note: sampleMap[10], name: 'Hat', colour: 'purple' },
              { id: 11, note: sampleMap[11], name: 'Ride', colour: 'purple' },
              {
                id: 12,
                note: sampleMap[12],
                name: 'Tom Roll',
                colour: 'green',
              },
              { id: 13, note: sampleMap[13], name: 'Stab', colour: 'indigo' },
              {
                id: 14,
                note: sampleMap[14],
                name: 'Snare Roll',
                colour: 'green',
              },
              {
                id: 15,
                note: sampleMap[15],
                name: 'Stab',
                colour: 'indigo',
              },
            ]}
            // TODO: Refactor Reactronica notes to be note.note, not name!
            activePads={notes.map((note) => {
              return {
                ...note,
                note: note.name,
              };
            })}
            onPadDown={(note) => {
              console.log(note);

              setNotes([{ name: note }]);
            }}
            onPadUp={() => {
              setNotes([]);
            }}
          />
        </div>
      </div>

      <Song bpm={80}>
        <Track>
          <Instrument
            type="sampler"
            notes={notes}
            samples={{
              [sampleMap[7]]:
                '/audio/drums-that-knock-free-vol-1/808s + Bass/Fuccin Swag 808 C.wav',
              [sampleMap[6]]:
                '/audio/drums-that-knock-free-vol-1/Kicks/Nuckin Futs Kick.wav',
              [sampleMap[4]]:
                '/audio/drums-that-knock-free-vol-1/Kicks/Nuckin Futs Kick.wav.wav',
              [sampleMap[9]]:
                '/audio/drums-that-knock-free-vol-1/Snares + Claps + Rimshots/Pisht Snare.wav',
              [sampleMap[15]]:
                '/audio/drums-that-knock-free-vol-1/Snares + Claps + Rimshots/Pisht Snare.wav',
              [sampleMap[10]]:
                '/audio/drums-that-knock-free-vol-1/Hihats/ND Hihat.wav',
              [sampleMap[8]]:
                '/audio/drums-that-knock-free-vol-1/Hihats/ND Hihat.wav',
            }}
          />
        </Track>
      </Song>
    </div>
  );
};

export default DrumPadsDemoPage;
