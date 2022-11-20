#include "BoringSong.h"

BoringSong::BoringSong(const std::string &name, const std::string &lyrics) : Song(name, lyrics) {}

std::string BoringSong::sing() const {
    std::string shoutedLyrics(_lyrics);

    return shoutedLyrics;
}
