export default function Portfolio() {
    return (
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Portfolio</h1>
          <div className="work-list">
            <div className="work">
              <img src="/tools/work-1.png" alt="workpng1" />
              <div className="layer">
                <h3>Mobile Responsive</h3>
                <p>
                  Are you looking for tips on making your portfolio mobile-responsive? 
                  Since you're building it with HTML and CSS, using flexbox, grid, and media queries will be key for responsiveness.
                </p>
                <a href="#"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="/tools/work-2.png" alt="workpng2" />
              <div className="layer">
                <h3>Music App</h3>
                <p>
                  A functional music app needs 🎵 Audio playback, 🎛 Music controls, 📂 Playlist management, and 🎨 Responsive UI.
                </p>
                <a href="#"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="/tools/work-3.png" alt="workpng3" />
              <div className="layer">
                <h3>Online Shopping App</h3>
                <p>
                  Are you looking to build an online shopping app? If so, do you want it in React (Next.js) or just HTML, CSS, and JavaScript?
                </p>
                <a href="#"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">See more</a>
        </div>
      </div>
    );
  }
  