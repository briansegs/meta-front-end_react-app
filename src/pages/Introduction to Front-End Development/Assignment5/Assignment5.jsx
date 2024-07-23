import logo from "./logo.png";

const Assignment5 = () => {
  return (
    <html>
      <head>
        <title>Little Lemon</title>
      </head>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <img alt="logo" src={logo} class="img-fluid" width="250px" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <h1>Our Menu</h1>
              </div>
              <div class="alert alert-info" role="alert">
                Our resturant will be closed on New Year's Day
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <h2>
                Falafel<span class="badge bg-secondary">New</span>
              </h2>
              <p>Chickpea, herbs, spices.</p>
              <h2>Fried Calamari</h2>
              <p>Squid, buttermilk.</p>
            </div>
            <div class="col-12 col-lg-6">
              <h2>Pasta Salad</h2>
              <p>Lettuce, vegetables, mozzarella.</p>
              <h2>Greek Salad</h2>
              <p>Cucumbers, onion, feta cheese.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="text-center">
                <button type="button" class="btn btn-primary">
                  Order Online
                </button>
              </div>
            </div>
          </div>
        </div>
        <script src="bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
};

export default Assignment5;