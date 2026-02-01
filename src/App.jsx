import React, { useState } from "react";
import "./App.css";

const banners = [
  {
    image:  "/banners/banner1.jpg",
    text: "Find the Best Doctors",
  },
  {
    image: "/banners/banner2.jpg",
    text: "Easy Appointment Booking",
  },
  {
    image: "/banners/banner3.jpg",
    text: "Quality Healthcare",
  },
];

function App() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? banners.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === banners.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="app">
      <h1 className="title">Doctor's Appointment</h1>

      <input
        type="text"
        placeholder="Search for doctors"
        className="search"
      />

      {/* ✅ CAROUSEL GOES HERE */}
     <div className="carousel-container">
  <button className="arrow left" onClick={prevSlide}>‹</button>

  <div
    className="carousel-track"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {banners.map((banner, index) => (
      <div className="carousel-slide" key={index}>
        <img src={banner.image} alt={banner.text} />
        <div className="banner-text">{banner.text}</div>
      </div>
    ))}
  </div>

  <button className="arrow right" onClick={nextSlide}>›</button>
</div>


      <h2 className="section-title">Top Doctors</h2>
      <div className="doctor-cards">

  <div className="doctor-card">
    <img
      src="/Doctors/doctor1.jpg"
      alt="Doctor"
      className="doctor-img"
    />

    <div className="doctor-details">
      <div className="doctor-info">
        <h3>Dr. Claire</h3>
        <p>Neurosurgeon</p>
        <div className="rating">⭐ 5.0</div>
      </div>

      <button className="book-btn">Book</button>
    </div>
  </div>

  <div className="doctor-card">
    <img
      src="/Doctors/doctor2.jpg"
      alt="Doctor"
      className="doctor-img"
    />

    <div className="doctor-details">
      <div className="doctor-info">
        <h3>Dr. Juniper</h3>
        <p>Neurosurgeon</p>
        <div className="rating">⭐ 5.0</div>
      </div>

      <button className="book-btn">Book</button>
    </div>
  </div>

</div>


    </div>
  );
}

export default App;
