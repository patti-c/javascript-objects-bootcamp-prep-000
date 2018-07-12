var playlist = {
<<<<<<< HEAD
  gaga: "Bad Romance"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  console.log(playlist)
=======
  bowie: "Space Odyssey"
}

function updatePlaylist(playlist, artist, title) {
  playlist.artist = title
>>>>>>> a3affffadc261b4a69377f730a82160f2259d23f
  return playlist
}

function removeFromPlaylist(playlist, artist) {
<<<<<<< HEAD
  delete playlist[artist]
=======
  delete playlist.artist
>>>>>>> a3affffadc261b4a69377f730a82160f2259d23f
  return playlist
}