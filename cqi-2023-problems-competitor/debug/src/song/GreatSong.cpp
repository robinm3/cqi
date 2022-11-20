#include "GreatSong.h"

GreatSong::GreatSong(const std::string &name, const std::string &lyrics) : Song(name, lyrics) {}

std::string GreatSong::sing() const {
    std::string shoutedLyrics = "";
    for (int x=0; x<strlen(_lyrics.c_str()); x++)
        shoutedLyrics += toupper(_lyrics[x]);

    return shoutedLyrics;
}
