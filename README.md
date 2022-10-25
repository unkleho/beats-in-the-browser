# Beats in the Browser

> Next.js Conf 2022 talk by Kaho Cheung

This is a Next.js project and includes:

- Slides from the talk
- Live code demo
- Drum pads demo (coming soon)
- Performance demo (coming soon)
- Talk tech from the talk

## Getting Started

```zsh
npm i
npm run dev
```

## Slide Deck

The deck files is in `components/deck.tsx` and built with Spectacle. Some trickiness was required to get Next.js and Spectacle working together which I've detailed below.

### Spectacle and Next.js

To get Spectacle loading in Next.js, `next-transpile-modules` was needed (check out [next.config.js](./next.config.js)). Then ran into a `window` error as Spectacle is client side only.

To solve this, I moved the entire deck into its own [component](./components/deck.tsx) and dynamically loaded it from [Next.js page](./pages/index.tsx) so it never touches SSR. Fast refresh sort of works, but doesn't create new slides unfortunately.

## Live Code Demo

Have a play with it at [pages/live-code-demo.tsx](./pages/live-code-demo.tsx).

Browsers will not allow you to start audio without user input, so the play button needed.

The sounds are different to the actual talk as there are licensing issues. I've replaced them with a free drum kit from Decap.

## Drum Pads Demo (coming soon)

Still need to extract this from private repo.

## Performance Demo (coming soon)

This is quite a big project and will need to be extracted from a private repo.

## Talk Tech

It was a quite a complicated setup to record a talk with both voice and music at the same time, so I've detailed it below if anyone finds it useful.

### OBS software

Amazing free software and was able to record multiple channels of audio. Video was recorded with DSLR cam (thank's to @lazygamer), while voice with an Elgato Wave mic.

### Loopback

Needed to internally route audio from Chrome to OBS on a separate channel to the mic.

### Handbrake

Another awesome open source tool. Exported from OBS to `mkv` file as this format allows multiple audio channels (eg. for multi language support). However Final Cut Pro didn't support this!

So used Handbrake to convert to mp4, twice for each channel (mic and Chrome audio).

### Final Cut Pro

Arranged it all in Final Cut Pro, nothing fancy. Exported to `mov`, couldn't export to `mp4`, so had to use Handbrake to convert to `mov` to `mp4`.
