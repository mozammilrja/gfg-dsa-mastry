// // Target Interface
// class PaymentGateway {
//   makePayment(amount) {
//     throw new Error("This method shoukd be overridden");
//   }
// }

// class OldPaymentSystem {
//   processPayment(amount) {
//     console.log(`Processing payment of $${amount} through old payment system.`);
//   }
// }

// class PaymentAdapter extends PaymentGateway {
//   constructor(oldPaymentSystem) {
//     super();
//     this.oldPaymentSystem = oldPaymentSystem;
//   }

//   makePayment(amount) {
//     console.log(`Adapting payment request for amount: $${amount}`);
//     this.oldPaymentSystem.processPayment(amount);
//   }
// }

// // Usage Example
// const oldPaymentSystem = new OldPaymentSystem();
// const paymentAdapter = new PaymentAdapter(oldPaymentSystem);

// paymentAdapter.makePayment(100); // Output:
// // Adapting payment request for amount: $100
// // Processing payment of $100 through OldPaymentSystem.

// Target Interface
class MediaPlayer {
  play(fileName) {
    throw new Error("play() must be implemented by subclass");
  }
}

// Adaptee 1
class Mp3Player {
  playMp3(fileName) {
    console.log(`Playing MP3 file: ${fileName}`);
  }
}

// Adaptee 2
class Mp4Player {
  playMp4(fileName) {
    console.log(`Playing MP4 file: ${fileName}`);
  }
}

// Adaptee 3
class AviPlayer {
  playAvi(fileName) {
    console.log(`Playing AVI file: ${fileName}`);
  }
}

// Adapter
class MediaAdapter extends MediaPlayer {
  constructor(fileType) {
    super();
    this.fileType = fileType;
    this.player = null;

    // Create an instance of the appropriate player based on the file type
    if (fileType === "mp3") {
      this.player = new Mp3Player();
    } else if (fileType === "mp4") {
      this.player = new Mp4Player();
    } else if (fileType === "avi") {
      this.player = new AviPlayer();
    }
  }

  play(fileName) {
    // Delegate the play action to the appropriate player
    if (this.fileType === "mp3") {
      this.player.playMp3(fileName);
    } else if (this.fileType === "mp4") {
      this.player.playMp4(fileName);
    } else if (this.fileType === "avi") {
      this.player.playAvi(fileName);
    } else {
      console.log(`File type ${this.fileType} not supported`);
    }
  }
}

// Client
class AudioPlayer extends MediaPlayer {
  constructor(fileType) {
    super();
    this.mediaAdapter = new MediaAdapter(fileType);
  }

  play(fileName, fileType) {
    if (fileType === "mp3") {
      // Directly play MP3 files using the Mp3Player
      const mp3Player = new Mp3Player();
      mp3Player.playMp3(fileName);
    } else if (fileType === "mp4" || fileType === "avi") {
      // Use the adapter for other file types
      this.mediaAdapter.play(fileName);
    } else {
      console.log(`File type ${fileType} not supported`);
    }
  }
}

// Usage Example
const audioPlayer = new AudioPlayer("mp3");
const videoPlayer = new AudioPlayer("mp4");

audioPlayer.play("song.mp3", "mp3"); // Output: Playing MP3 file: song.mp3
videoPlayer.play("video.mp4", "mp4"); // Output: Playing MP4 file: video.mp4
videoPlayer.play("movie.avi", "avi"); // Output: Playing AVI file: movie.avi
audioPlayer.play("track.wav", "wav"); // Output: File type wav not supported
