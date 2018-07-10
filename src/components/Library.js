import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import albumData from './../data/albums';
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className='library'>
        <div className="row">
        {
          this.state.albums.map( (album, index) =>
          <div className="col-sm" key={index}>
            <div className="card width-18rem" key={index}>
              <img className="card-img-top rounded" src={album.albumCover} alt={album.title}/>
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
                <p className="card-text">{album.artist}</p>
                <p className="card-text">{album.songs.length} songs</p>
                <a href={`/album/${album.slug}`} className="btn btn-primary">View songs</a>
              </div>
            </div>
          </div>
          )
        }
        </div>
      </section>
    );
  }
}
export default Library;
