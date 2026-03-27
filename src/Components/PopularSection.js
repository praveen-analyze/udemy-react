function PopularSection() {
  return (
    <div className="popular">
      <h1 className="popular__title">Most Popular</h1>
      <p>Pick the Popular one</p>

      <div className="rec__container">

        <div className="rec__card">
          <img src="c4.jpg" alt="course" />
          <h3>2023 Python Data Visualisation Masterclass</h3>
          <p>Col Steeve</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="rec__card">
          <img src="c2.jpg" alt="course" />
          <h3>2025 Artificial Intelligence and Machine Learning</h3>
          <p>Col Steeve</p>
          <p>4.4⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="rec__card">
          <img src="c3.jpg" alt="course" />
          <h3>2024 Full Stack Development Bootcamp</h3>
          <p>Col Steeve</p>
          <p>3.9⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

        <div className="rec__card">
          <img src="c1.jpg" alt="course" />
          <h3>2023 Python Data Visualisation Masterclass</h3>
          <p>Col Steeve</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>499 <del>1999</del></p>
        </div>

      </div>
    </div>
  );
}

export default PopularSection;