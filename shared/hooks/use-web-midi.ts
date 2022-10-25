import { useEffect } from 'react';
import { NoteMessageEvent, WebMidi } from 'webmidi';

export const useWebMidi = (
  inputName: string,
  onNoteOn: (e: NoteMessageEvent) => void,
  onNoteOff: (e: NoteMessageEvent) => void
) => {
  console.log(inputName);

  useEffect(() => {
    WebMidi.enable()
      .then(onEnabled)
      .catch((err) => console.error);

    function onEnabled() {
      console.log('kaho');
      // Inputs
      WebMidi.inputs.forEach((input) =>
        console.log(input.manufacturer, input.name)
      );

      // If you get Error: WebMidi is not enabled, use Chrome...
      const input = WebMidi.getInputByName(inputName);

      if (input) {
        console.log('MIDI connected:', input.name);

        input.addListener('noteon', (e) => {
          onNoteOn?.(e);
        });

        input.addListener('noteoff', (e) => {
          onNoteOff?.(e);
        });
      }
    }

    return () => {
      console.log('Remove webmidi listener');

      const input = WebMidi.getInputByName(inputName);

      if (input) {
        input.removeListener();
      }

      // WebMidi?.disable();
    };
  }, [inputName, onNoteOn, onNoteOff]);
};
