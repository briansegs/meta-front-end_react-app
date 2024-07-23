import logo from "./logo.png";

const Assignment4 = () => {
  return (
    <html>
      <head>
        <title>Little Lemon</title>
      </head>
      <body>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <img alt="logo" src={logo} class="img-fluid" width="250px" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <h1>Our Menu</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2>Falafel</h2>
              <p>Chickpea, herbs, spices.</p>
              <h2>Fried Calamari</h2>
              <p>Squid, buttermilk</p>
            </div>
            <div className="col-12 col-lg-6">
              <h2>Pasta Salad</h2>
              <p>Lettuce, Vegetables, mozzarella.</p>
              <h2>Greek Salad</h2>
              <p>Cucumber, onion, feta cheese.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Assignment4;
