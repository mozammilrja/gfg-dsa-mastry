// // Implementor
// class Color {
//   applyColor() {
//     throw new Error("applyColor() must be implemented by subclass");
//   }
// }

// // Concrete Implementor 1
// class RedColor extends Color {
//   applyColor() {
//     console.log("Applying red color");
//   }
// }

// // Concrete Implementor 2
// class BlueColor extends Color {
//   applyColor() {
//     console.log("Applying blue color");
//   }
// }

// // Abstraction
// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   draw() {
//     throw new Error("draw() must be implemented by subclass");
//   }
// }

// // Refined Abstraction 1
// class Circle extends Shape {
//   draw() {
//     console.log("Drawing circle");
//     this.color.applyColor();
//   }
// }

// // Refined Abstraction 2
// class Square extends Shape {
//   draw() {
//     console.log("Drawing square");
//     this.color.applyColor();
//   }
// }

// // Client
// const red = new RedColor();
// const blue = new BlueColor();

// const redCircle = new Circle(red);
// const blueSquare = new Square(blue);

// redCircle.draw(); // Output: Drawing circle
// //         Applying red color

// blueSquare.draw(); // Output: Drawing square
// //         Applying blue color

// Implementor
class OS {
  playAudio(fileName) {
    throw new Error("playAudio() must be implemented by subclass");
  }

  playVideo(fileName) {
    throw new Error("playVideo() must be implemented by subclass");
  }
}

// Concrete Implementor 1
class WindowsOS extends OS {
  playAudio(fileName) {
    console.log(`Playing audio on Windows: ${fileName}`);
  }

  playVideo(fileName) {
    console.log(`Playing video on Windows: ${fileName}`);
  }
}

// Concrete Implementor 2
class MacOS extends OS {
  playAudio(fileName) {
    console.log(`Playing audio on MacOS: ${fileName}`);
  }

  playVideo(fileName) {
    console.log(`Playing video on MacOS: ${fileName}`);
  }
}

// Concrete Implementor 3
class LinuxOS extends OS {
  playAudio(fileName) {
    console.log(`Playing audio on Linux: ${fileName}`);
  }

  playVideo(fileName) {
    console.log(`Playing video on Linux: ${fileName}`);
  }
}

// Abstraction
class MediaPlayer {
  constructor(os) {
    this.os = os;
  }

  play(fileName) {
    throw new Error("play() must be implemented by subclass");
  }
}

// Refined Abstraction 1
class AudioPlayer extends MediaPlayer {
  play(fileName) {
    console.log(`AudioPlayer: Requesting to play audio file ${fileName}`);
    this.os.playAudio(fileName);
  }
}

// Refined Abstraction 2
class VideoPlayer extends MediaPlayer {
  play(fileName) {
    console.log(`VideoPlayer: Requesting to play video file ${fileName}`);
    this.os.playVideo(fileName);
  }
}

// Usage Example
const windows = new WindowsOS();
const mac = new MacOS();
const linux = new LinuxOS();

const windowsAudioPlayer = new AudioPlayer(windows);
const macVideoPlayer = new VideoPlayer(mac);
const linuxAudioPlayer = new AudioPlayer(linux);
const linuxVideoPlayer = new VideoPlayer(linux);

windowsAudioPlayer.play("song.mp3"); // Output: AudioPlayer: Requesting to play audio file song.mp3
//         Playing audio on Windows: song.mp3

macVideoPlayer.play("movie.mp4"); // Output: VideoPlayer: Requesting to play video file movie.mp4
//         Playing video on MacOS: movie.mp4

linuxAudioPlayer.play("track.wav"); // Output: AudioPlayer: Requesting to play audio file track.wav
//         Playing audio on Linux: track.wav

linuxVideoPlayer.play("video.avi"); // Output: VideoPlayer: Requesting to play video file video.avi
//         Playing video on Linux: video.avi
