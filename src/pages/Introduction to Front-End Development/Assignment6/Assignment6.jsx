import logo from "./photo.jpg";

const Assignment6 = () => {
  return (
    <html>
      <head>
        <title>My Bio Page</title>
      </head>
      <body>
        <div class="container">
          <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
              <h1>Brian</h1>
              <img src={logo} alt="logo" class="img-fluid" width="250" />
            </div>
            <div id="more" class="col-12 col-lg-6">
              <h2>Favorite Music Artists</h2>
              <ul>
                <li>Nas</li>
                <li>Jay-z</li>
                <li>Linkin Park</li>
                <li>Incubus</li>
                <li>Prince</li>
              </ul>
              <h2>Favorite Films</h2>
              <ol>
                <li>Pulp Fiction</li>
                <li>Avengers</li>
                <li>X-men</li>
                <li>Deadpool</li>
                <li>Batman</li>
              </ol>
              <a href="https://www.meta.com/user/12" class="btn btn-primary">
                My Meta Profile
              </a>
            </div>
          </div>
        </div>

        <script src="bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
};

export default Assignment6;
