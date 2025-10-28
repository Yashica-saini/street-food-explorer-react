import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";

const initialCities = [
  { name: "Delhi", img: "https://t3.ftcdn.net/jpg/14/14/68/18/360_F_1414681897_YfcxX6OSq8ZBbJkEcCDrUzmhx2yCXVEF.jpg", path: "/delhi" },
  { name: "Mumbai", img: "https://media.istockphoto.com/id/537817390/photo/vada-pav-or-vada-pav.jpg?s=612x612&w=0&k=20&c=FLzOS7K6VqWYQqawx5rUjHp83bDp_V3ohO_D3WSKS-I=", path: "/mumbai" },
  { name: "Rajasthan", img: "https://t3.ftcdn.net/jpg/11/51/29/30/360_F_1151293018_GSIxnzmeArTloJUT4r3n5gX5n7JlchBT.jpg", path: "/rajasthan" },
  { name: "Tamil Nadu", img: "https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=", path: "/tamilnadu" },
  { name: "West Bengal", img: "https://www.shutterstock.com/image-photo/fish-dishes-bengali-delicacy-600w-1644255829.jpg", path: "/westbengal" },
  { name: "Lucknow", img: "https://media.istockphoto.com/id/1413306666/photo/indian-spices-nalli-ihari-rogan-josh-with-rice-and-ginger-served-in-a-dish-isolated-on-dark.jpg?s=612x612&w=0&k=20&c=SZg7bazT2qkdT6E7iqVOLoaLT-8JOfVJuut8CtGoD2c=", path: "/lucknow" }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCities = initialCities.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase())
  );

  const openCity = (path) => navigate(path);

  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <h2>Cities Explorer</h2>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>

      {/* Header + slider */}
      <header className="header">
        <div className="slider">
          <img src="https://i.pinimg.com/736x/46/87/02/468702ee8eea3bb4d92aaa06d9b1e923.jpg" alt="food" />
          <img src="https://c4.wallpaperflare.com/wallpaper/803/804/833/food-4k-download-for-pc-wallpaper-preview.jpg" alt="food" />
          <img src="https://wallpapers.com/images/hd/food-4k-1pf6px6ryqfjtnyr.jpg" alt="food" />
          <img src="https://wallpapers.com/images/featured/indian-food-x2tv62mgy6kq4or3.jpg" alt="food" />
          <img src="https://c4.wallpaperflare.com/wallpaper/837/898/423/food-fruit-healthy-acorn-wallpaper-preview.jpg" alt="food" />
        </div>

        <div className="overlay">
          <h1>CITIES EXPLORER</h1>
          <p>Discover street food across India by exploring different cities</p>
          <input
            type="text"
            placeholder="Search cities..."
            className="search-box"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      {/* Cities grid */}
      <main className="cities">
        <h2>Cities of India</h2>
        <div className="city-grid">
          {filteredCities.map(city => (
            <div
              className="city-card"
              key={city.name}
              onClick={() => openCity(city.path)}
            >
              <img src={city.img} alt={city.name} />
              <p>{city.name}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Street Food Explorer India | All Rights Reserved</p>
      </footer>
    </div>
  );
}
