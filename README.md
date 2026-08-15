🎵 Shoitfy

A simple, interactive music player built with HTML, CSS, and Vanilla JavaScript, inspired by modern music streaming interfaces.






🎧 About The Project

Shoitfy is a front-end music player project created with vanilla JavaScript.

The application allows users to browse a list of songs and control playback through a custom player interface. Song data, audio paths, and cover images are managed from JavaScript, while the interface is styled with CSS and enhanced with Font Awesome icons.

The project is focused on practicing important JavaScript concepts such as:

DOM manipulation

Event listeners

Arrays and objects

Audio API

Dynamic UI updates

State management

User interactions

✨ Features

▶️ Play and pause the current song

🎵 Play any song directly from the song list

⏭️ Skip to the next song

⏮️ Return to the previous song

📊 Control playback using the progress bar

🔄 Automatically play the next song after the current song finishes

🎨 Update play/pause icons dynamically

💿 Display a cover image for every song

🎞️ Show an animated playing indicator

📝 Update the currently playing song name

🔁 Cycle from the last song back to the first song

🖥️ Preview

The interface contains:

A navigation bar

A music list

Song cover images

Individual play buttons

A bottom music controller

A progress bar

Previous / Play / Next controls

Current song information

🛠️ Built With

Technology

Purpose

HTML5

Page structure

CSS3

Styling and layout

JavaScript ES6+

Music player logic and interactions

Font Awesome

Player and UI icons

Google Fonts

Typography

📁 Project Structure

Shoitfy/
│
├── index.html
├── style.css
├── main.js
├── playing.gif
├── logo.png
├── bg.jpg
│
├── songs/
│   ├── 1.mp3
│   ├── 2.mp3
│   ├── 3.mp3
│   ├── ...
│   └── 10.mp3
│
└── covers/
    ├── 1.jpg
    ├── 2.jpg
    ├── 3.jpg
    ├── ...
    └── 10.jpg

🎼 Song Data

Songs are stored in a JavaScript array containing three main properties:

let songs = [
    {
        songName: "Salma-e-Ishq",
        filePath: "songs/1.mp3",
        coverPath: "covers/1.jpg"
    }
];

This makes it easy to add, remove, or update songs without rewriting the UI manually.

⚙️ How The Player Works

1. Song Selection

When the page loads, JavaScript reads the song array and updates each .songItem with its cover image and song name.

2. Play / Pause

The main play button checks whether the audio is currently paused:

if (audioElement.paused) {
    audioElement.play();
} else {
    audioElement.pause();
}

The interface then updates the main icon and the animated playing indicator.

3. Progress Bar

The progress bar is synchronized with the audio's current playback time.

let progress =
    (audioElement.currentTime / audioElement.duration) * 100;

Users can also click or drag the progress bar to jump to another point in the song.

4. Next / Previous

The player keeps track of the current song using:

let songIndex = 0;

Next and previous buttons update this index and load the corresponding track.

5. Auto Play

When a song ends, the player automatically moves to the next song.

audioElement.addEventListener("ended", () => {
    // Play next song
});

🎮 Player Controls

Control

Action

▶️ Play

Start the current song

⏸️ Pause

Pause playback

⏮️ Previous

Play the previous track

⏭️ Next

Play the next track

📊 Progress Bar

Change the current playback position

🎵 Song Button

Play or pause a selected track

🚀 Getting Started

1. Clone the repository

git clone YOUR_REPOSITORY_URL

2. Open the project

cd Shoitfy

3. Start the project

This project does not require a framework or build tool.

You can simply open:

index.html

in your browser.

For a better development experience, you can also use the Live Server extension in Visual Studio Code.

⚠️ Important

Make sure the project keeps the expected file structure.

For example:

songs/1.mp3
covers/1.jpg

must match the paths defined in main.js.

Also make sure your image and audio files are included locally when uploading the project to GitHub.

📱 Responsive Design

The current project uses CSS for the layout and styling. The next improvement would be making the player fully optimized for smaller screens and mobile devices.

🔮 Future Improvements

Some ideas for future versions:

🔍 Search for songs

🔊 Volume control

🔀 Shuffle mode

🔁 Repeat mode

❤️ Favorite songs

📃 Create playlists

💾 Save user preferences with localStorage

📱 Improve mobile responsiveness

🎚️ Add a volume slider

🎨 Add a dark/light theme

⏱️ Display the current time and total duration

🖼️ Add a larger album-art player

📊 Add audio visualization

🧠 What I Practiced

This project helped me practice real JavaScript interactions including:

DOM Manipulation
      ↓
Event Listeners
      ↓
Audio API
      ↓
Dynamic Content
      ↓
State Management
      ↓
Interactive UI







If you like this project, consider giving the repository a ⭐ on GitHub.

Built with ❤️ using HTML, CSS & JavaScript.
