## Spectacle

Had to use `next-transpile-modules` for `spectacle`. Then ran into window error as `spectacle` is client side only. Moved entire deck into own component and dynamically loaded that from Next page so it never touches SSR. Fast refresh doesn't create new slides unfortunately.

## Private

This should be private as it has samples

Need to create another repo.

https://reactflow.dev/

## Talk Tech

### OBS software

Recorded the talk with DSLR cam (thank's to @lazygamer) and Elgato Wave mic.

### Loopback

Needed to internally route audio from Chrome to OBS on a separate channel to the mic.

### Handbrake

Exported from OBS to mkv file, this format allows multiple audio channels (eg. for multi language support). However Final Cut Pro didn't support this! So had to convert to mp4, twice for each channel (mic and Chrome audio).

### Final Cut Pro

Arranged it all in Final Cut Pro, nothing fancy. Exported to mov, couldn't export to mp4, so had to use Handbrake to convert to mov to mp4.
