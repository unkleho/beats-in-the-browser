import React from 'react';
import {
  Deck as SpectacleDeck,
  Slide,
  Heading as SpectacleHeading,
  ListItem as SpectacleListItem,
  UnorderedList as SpectacleUnorderedList,
  Appear,
  CodePane,
  Box,
  Text,
} from 'spectacle';

import codeTheme from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SpectacleHeading>
    <span className="-mt-1 -mb-1 block bg-gradient-to-bl from-primary to-secondary bg-clip-text text-5xl uppercase tracking-wide text-transparent">
      {children}
    </span>
  </SpectacleHeading>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <SpectacleListItem className="text-gray-300">
    <div className="mb-8">{children}</div>
  </SpectacleListItem>
);

const UnorderedList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <SpectacleUnorderedList className="max-w-4xl self-center">
    {children}
  </SpectacleUnorderedList>
);

export default function Deck() {
  return (
    <SpectacleDeck
      theme={{
        colors: {
          secondary: '#FFF',
          primary: '#FFF',
          tertiary: '#050505', // Background
        },
        fonts: {
          header: 'Audiowide',
          text: 'Inter',
        },
      }}
    >
      <Slide padding={48}>
        <div className="grid min-h-full grid-cols-6 grid-rows-4">
          <div className="col-start-1 row-start-1 flex">
            <div className="h-5 w-5 bg-grey-lighter"></div>
            <div className="ml-[2px] h-5 w-5 bg-grey-light"></div>
            <div className="ml-[2px] h-5 w-5 bg-grey"></div>
            <div className="ml-[2px] h-5 w-5 bg-grey-dark"></div>
          </div>

          <span
            className="col-span-4 col-start-1 row-start-2 bg-gradient-to-bl from-primary to-secondary bg-clip-text font-tertiary uppercase leading-none text-transparent"
            style={{
              fontSize: '200px',
              transform: 'translate(-0.07em, -0.15em)',
            }}
          >
            Beats
          </span>
          <span className="col-start-2 row-start-3 text-xl uppercase leading-none tracking-widest text-gray-300">
            in the
          </span>
          <span
            className="col-span-3 col-start-3 row-start-3 bg-gradient-to-bl from-primary to-secondary bg-clip-text font-tertiary text-6xl uppercase leading-none text-transparent"
            style={{
              fontSize: '95px',
              transform: 'translate(-0.07em, -0.15em)',
            }}
          >
            Browser
          </span>
          <span className="col-start-5 row-start-1 text-2xl text-gray-300">
            <span className="font-medium">Kaho Cheung</span>
            <br />
            <span className="font-thin opacity-60">AgriWebb</span>
          </span>
          <span className="col-start-2 row-start-4 flex text-2xl opacity-90">
            <span className="mt-auto block bg-gradient-to-bl from-primary to-secondary bg-clip-text font-normal text-transparent">
              @unkleho
            </span>
          </span>
          <span className="col-start-3 row-start-4 text-lg uppercase tracking-widest text-gray-300">
            Next.JS Conf <span className="opacity-70">2022</span>
          </span>

          <span className="relative col-start-1 row-start-4">
            <span className="stripe block h-full w-2 bg-gradient-to-br from-blue-500 to-purple-500"></span>
          </span>
        </div>
      </Slide>

      {/* Hi everyone, I'm Kaho, welcome to my talk Beats in the browser */}
      {/* I'll be showcasing various ways of making music with Next JS and React */}

      <Slide>
        <Heading>About</Heading>

        <UnorderedList>
          <Appear>
            <ListItem>
              Software Engineer at <strong>AgriWebb</strong>
              <br />
              <span className="opacity-70">
                (Livestock management platform)
              </span>
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Released electronic/hip hop music as <br />{' '}
              <strong>Unkle Ho</strong> and with <strong>The Herd</strong>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Herd image */}
      <Slide backgroundImage="url(/images/mgh_5411.JPG)" backgroundSize="100%">
        {' '}
        <p className="ml-auto text-grey-lightest">
          Photo by <strong>Michelle Grace Hunder</strong>
        </p>
      </Slide>

      {/* As a musician and developer, why not combine beats into the browser? */}
      <Slide>
        <Heading>
          Beats{' '}
          <span className="font-primary text-3xl font-normal text-grey-lightest ">
            in the
          </span>{' '}
          browser
        </Heading>

        <UnorderedList>
          <Appear>
            <ListItem>
              Combine <strong>music</strong> and <strong>dev</strong>
            </ListItem>
          </Appear>

          <Appear>
            {/* I've got a few demos built with Next JS and React... */}
            <ListItem>
              Music demos with <strong>Next.js</strong> and{' '}
              <strong>React</strong>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Show the <strong>browser</strong> can be a music platform
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Reactronica</Heading>

        <UnorderedList>
          <Appear>
            <ListItem>
              Wrapper around <strong>Tone.js</strong>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Inspired by <strong>React Music</strong>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              <strong>UI</strong> as a function of state, but also...
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              <strong>Music</strong> as a function of state
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Live Code Demo</Heading>

        <UnorderedList>
          <Appear>
            <ListItem>
              Use Reactronica’s <strong>Song</strong>, <strong>Track</strong>,{' '}
              <strong>Instrument</strong> and <strong>Effect</strong> components
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Play music with code using <strong>Fast Refresh</strong>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Performance Demo</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>
              <strong>Ableton Live</strong> inpsired interface
              {/* If you are not familiar with Ableton, it is a digital audio workstation, used for modern music production and performance */}
            </ListItem>
          </Appear>

          <div className="invisible">
            {/* Add Hasura and Apollo GraphQL if ready... */}
            <ListItem>
              Built with <strong>Next.js</strong>, <strong>Tailwind</strong>,{' '}
              <strong>Recoil</strong> and <strong>Framer Motion</strong>
            </ListItem>
          </div>
        </UnorderedList>
      </Slide>

      <Slide
        backgroundImage="url(/images/ableton-herd.png)"
        backgroundSize="contain"
        // transition={fadeTransition}
      >
        {' '}
      </Slide>

      {/* Mine won't look as good as that! */}

      <Slide>
        <Heading>Performance Demo</Heading>
        <UnorderedList>
          <ListItem>
            <strong>Ableton Live</strong> inpsired interface
            {/* If you are not familiar with Ableton, it is a digital audio workstation, used for modern music production and performance */}
          </ListItem>

          <Appear>
            <ListItem>
              Demo built with <strong>Next.js</strong>,{' '}
              <strong>Tailwind</strong>, <strong>Recoil</strong> and{' '}
              <strong>Framer Motion</strong>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Plus with <strong>GraphQL</strong>, <strong>Apollo</strong>
              {' and '}
              <strong>Hasura</strong>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Unkle Ho */}
      <Slide backgroundImage="url(/images/IMG_1676.jpg)" backgroundSize="cover">
        {' '}
      </Slide>

      {/* Open Performance demo! */}

      <Slide>
        <Heading>Drum Pads Demo</Heading>

        <UnorderedList>
          <Appear>
            <ListItem>Replicate MPC style drum pads</ListItem>
          </Appear>

          <div className="invisible">
            <ListItem>
              Reactronica allows you to trigger sounds with the{' '}
              <strong>notes</strong> prop
            </ListItem>
            <ListItem>
              Connect MIDI device with
              <br />
              <strong>Webmidi.js</strong>
            </ListItem>
          </div>
        </UnorderedList>
      </Slide>

      <Slide
        backgroundImage="url(/images/mpc-one.png)"
        backgroundSize="initial"
      >
        {' '}
      </Slide>

      <Slide>
        <Heading>Drum Pads Demo</Heading>

        <UnorderedList>
          <ListItem>Replicate MPC style drum pads</ListItem>

          <Appear>
            <ListItem>
              Reactronica allows you to trigger sounds with the{' '}
              <strong>notes</strong> prop
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Connect MIDI device with <br />
              <strong>Webmidi.js</strong>
            </ListItem>
          </Appear>
        </UnorderedList>
      </Slide>

      {/* Show Trigger Finger */}

      <Slide>
        <div className="mx-auto w-[80ch]">
          <CodePane
            language="jsx"
            theme={codeTheme}
            // highlightRanges={[[2, 17], [10]]}
            showLineNumbers={false}
          >{`const DrumPad = () => {
  const [notes, setNotes] = useState();
  return (
    <>
      <button 
        onMouseDown={() => setNotes(['C3'])}
        onMouseUp={() => setNotes([])}
      >
        Cymbal Hit
      </button>

      <Song>
        <Track>
          <Instrument 
            type="sampler"
            samples={{ 'C3': '/audio/cymbal.wav' }}
            notes={notes} // Trigger notes here
          />
        </Track>
      </Song>
    <>
  )
}
        `}</CodePane>
        </div>
      </Slide>

      {/* Check out the code while I ... */}
      {/* Connect MIDI drums and adjust camera */}

      {/* That is all I've got for today */}
      <Slide>
        <Heading>Thanks</Heading>
        {/* Massive thanks to Vercel team for putting this conference on */}

        <UnorderedList>
          <Appear>
            {/* I hope you got a bit inspired to use the web in creative ways */}
            {/* it is such an incredible platform */}
            {/* doesn't have to be music either */}
            <ListItem>Web tools can be used in creative ways</ListItem>
          </Appear>

          <Appear>
            <ListItem>
              <span className="text-secondary">
                github.com/unkleho/beats-in-the-browser
              </span>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              <span className="text-secondary">
                github.com/unkleho/reactronica
              </span>
            </ListItem>
          </Appear>

          <Appear>
            <ListItem>
              Samples from <strong>Splice</strong>
            </ListItem>
            {/* SAAS: Samples as a service :) */}
          </Appear>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>
          Beats{' '}
          <span className="font-primary text-3xl font-normal text-grey-lightest ">
            in the
          </span>{' '}
          browser
        </Heading>
        <Text>
          <p className="mb-4 text-center text-2xl uppercase tracking-wider text-grey-lightest">
            San Francisco Time
          </p>
          <p className="mb-12 text-center text-4xl">
            1:15pm – 1:34pm PT, Tue 25 Oct
          </p>

          <p className="mb-4 text-center text-2xl uppercase tracking-wider text-grey-lightest">
            Sydney Time
          </p>
          <p className="mb-16 text-center text-4xl">
            7:15am – 7:34am AEDT, Wed 26 Oct
          </p>

          <p className="mb-4 text-center text-4xl font-medium">
            Next.js Conf 2022
          </p>

          <p className="text-center text-4xl text-secondary">nextjs.org/conf</p>
        </Text>
      </Slide>

      <style jsx>{`
        .stripe {
          animation: stripe-move 1s linear infinite;
          mask: repeating-linear-gradient(
            45deg,
            black,
            black 1px,
            transparent 0%,
            transparent 6px
          );
        }

        @keyframes stripe-move {
          0% {
            mask-position: 0px;
          }
          100% {
            mask-position: 8px;
          }
        }
      `}</style>
    </SpectacleDeck>
  );
}
