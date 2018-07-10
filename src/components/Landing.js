import React from 'react';
const Landing = () => (
   <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
     <ol className="carousel-indicators">
       <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
       <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
     </ol>
     <div className="carousel-inner">
       <div className="carousel-item active">
         <img className="d-block w-100" src="/assets/images/album_covers/m3.jpg" alt="First slide" />
         <div className="carousel-caption d-none d-md-block text-white bg-dark">
          <h5>Choose Your Music</h5>
          <p>The world is full of music; why should you have to listen to the music that someone else chose?</p>
        </div>
       </div>
       <div className="carousel-item">
         <img className="d-block w-100" src="/assets/images/album_covers/m1.jpg" alt="Second slide" />
         <div className="carousel-caption d-none d-md-block text-white bg-dark">
          <h5>Unlimited, streaming, ad-free</h5>
          <p>No arbitrary limits. No distractions.</p>
        </div>
       </div>
       <div className="carousel-item">
         <img className="d-block w-100" src="/assets/images/album_covers/m2.jpg" alt="Third slide" />
         <div className="carousel-caption d-none d-md-block text-white bg-dark">
          <h5>Mobile enabled</h5>
          <p>Lsten to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
       </div>
     </div>
     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
       <span className="sr-only">Previous</span>
     </a>
     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
       <span className="carousel-control-next-icon" aria-hidden="true"></span>
       <span className="sr-only">Next</span>
     </a>
</div>
);
export default Landing;
