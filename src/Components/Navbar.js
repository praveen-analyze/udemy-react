function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_s1">
        <h1 className="navbar_s1__title">Udemy</h1>
      </div>

      <div className="navbar_s2">
        <i
          className="fa-solid fa-magnifying-glass"
          style={{ color: "gray" }}
        ></i>
        <input type="text" placeholder="Type Here ..." />
      </div>

      <div className="navbar_s3">
        <p>Courses</p>

        <div className="my-learning">
          <p>My Learning</p>

          <div className="my-learning__popup">
            <p>You didn't purchase anything Yet</p>
          </div>
        </div>

        <i
          className="fa-solid fa-cart-arrow-down"
          style={{ color: "#0c0d0d" }}
        ></i>

        <i
          className="fa-solid fa-bell"
          style={{ color: "#0c0d0d" }}
        ></i>

        <i
          className="fa-solid fa-user"
          style={{ color: "#0c0d0d" }}
        ></i>
      </div>

      <div className="navbar_s4">
        <i
          className="fa-solid fa-bars"
          style={{ color: "rgb(18, 19, 21)" }}
        ></i>
      </div>
    </div>
  );
}

export default Navbar;