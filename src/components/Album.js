import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
 class Album extends Component {
   constructor(props) {
     super(props);

     const album = albumData.find( album => {
         return album.slug === this.props.match.params.slug
       });

       this.state = {
         album: album,
         currentSong: album.songs[0],
         currentTime: 0,
         volume: "0.6",
         duration: album.songs[0].duration,
         isPlaying: false,

       };

       this.audioElement = document.createElement('audio');
       this.audioElement.src = album.songs[0].audioSrc;
     }
     componentDidMount() {
       this.eventListeners = {
         timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
         durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       },
         volumechange: e => {
         this.setState({ volume: this.audioElement.volume });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
     this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
   }
     componentWilUnmount() {
       this.audioElement.src = null;
       this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
       this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
       this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
     };

     play() {
       this.audioElement.play();
       this.setState({ isPlaying: true });
     }

     pause() {
       this.audioElement.pause();
       this.setState({ isPlaying: false });
     }

     setSong(song) {
       this.audioElement.src = song.audioSrc;
       this.setState({ currentSong: song });
     }

     handleSongClick(song) {
       const isSameSong = this.state.currentSong === song;
       if (this.state.isPlaying && isSameSong) {
         this.pause();
       } else {
         if (!isSameSong) { this.setSong(song) }
           this.play();
       }
      }

      handleHoverOn (song) {
        this.setState({ hover: song });
      }

      handleHoverOff (song) {
        this.setState({ hover: null });
      }

      handleButton (song, index) {
        if (this.state.currentSong === song) {
          if (this.state.isPlaying === true) {
            return <span className="icon ion-md-pause"></span>;
          } else {
            return <span className="icon ion-md-play"></span>;
          }
        } else if (this.state.hover === song) {
          return <span className="icon ion-md-play"></span>;
        } else {
          return (index + 1)
        }
      }
      handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex-1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
      }
      handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.min(4, currentIndex+1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
      }
      handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
      }
      handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({ volume: newVolume});
      }
      formatTime(time) {
        if (time === undefined || isNaN(time)){
          return `-:--`
        }
       const minutes = Math.floor(time/60);
       const seconds = Math.floor(time-minutes*60);
       if(seconds<10){
       return `${minutes}:0${seconds}`
       }
       else{
         return `${minutes}:${seconds}`
       }
      }
   render() {
     return (
       <section className="album">
         <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
         </section>
         <table id="song-list" className="table">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {
              this.state.album.songs.map( (song, index) =>
                <tr className="album-song" key={index} onClick={() => this.handleSongClick(song)} >
                  <td onMouseEnter={() => this.handleHoverOn(song) } onMouseLeave={() => this.handleHoverOff(song)}>{this.handleButton(song, index)}</td>
                  <td>{song.title}</td>
                  <td>{this.formatTime(song.duration)}</td>
                </tr>
              )
            }
          </tbody>
         </table>
         <PlayerBar
            isPlaying={this.state.isPlaying}
            currentSong={this.state.currentSong}
            volume={this.audioElement.volume}
            currentTime={this.audioElement.currentTime}
            duration={this.audioElement.duration}
            handleSongClick={() => this.handleSongClick(this.state.currentSong)}
            handlePrevClick={() => this.handlePrevClick()}
            handleNextClick={() => this.handleNextClick()}
            handleTimeChange={(e) => this.handleTimeChange(e)}
            handleVolumeChange={(e) => this.handleVolumeChange(e)}
            formatTime={(time) => this.formatTime(time)}
          />
       </section>
     );
   }
 }

 export default Album;
