# plipple
### majorgamerjay@protonmail.com

Plipple is a simple bash script that can be used to make playlist of songs using
directories and symlinks. This as a result, does not take much space and can be
easily managable.

## How does it work?

```
Music
|- Songs
| |- Song1.mp3
| |- Song2.mp3
| |- Song3.mp3
|- Playlists
  |- Jazz
    |- Song1.mp3@ -> ../../Songs/Song1.mp3
    |- Song2.mp3@ -> ../../Songs/Song2.mp3
  |- Rock
    |- Song3.mp3@ -> ../../Songs/Song3.mp3
```

Here is a simple directory map of a ~/Music. Plipple will only work on `~/Music/Playlists`.

It will collect songs from anywhere else other than `~/Music/Playlists`. And the directories
in the playlists folder are playlists itself (e.g. in the shown example, `Jazz` and `Rock`)
are the playlists.

Manage the playlists and play songs from it as if they are simply directories and music files.
This should work with music players presumably since the symlinks basically points to the songs.

## How do I use it?

#### Required dependencies:

- Bash
- whiptail

Everything else should work with GNU coreutils. I don't know about other coreutils. If possible,
please do check and open Issues/send PRs.

Just run `plipple -r` (`-r` stands for `--run`) and it will open up whiptail dialog for
you!

## How do I install it?

1. Clone this repository
2. `make install` (Run as root obviously)

And that's it!

## License

This program is created under the MIT License.

## Screenshots

![Screenshot 1](https://i.imgur.com/MfU6Ccn.png =1280x720)

![Screenshot 2](https://i.imgur.com/y5oeqSQ.png =1280x720)
