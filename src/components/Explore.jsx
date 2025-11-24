import React, { useState } from "react";

export default function FoodPage() {
  const foods = [
    {
      name: "Pani Puri",
      state: "Maharashtra",
      description: "Crispy puris with spicy water.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT8xs4wQQxMcTSGAOJCrXlxQFTJ7-DpKNGA&s",
      video: "https://www.youtube.com/embed/JtZBEkeSUcM"
    },
    {
      name: "Chole Bhature",
      state: "Punjab",
      description: "Spicy chickpeas with fried bread.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgklmTrWapyFSa69gcH9knkvt5GZWj-EWwQg&s",
      video: "https://www.youtube.com/embed/JNzbZa2qleI"
    },
    {
      name: "Dosa",
      state: "Karnataka",
      description: "Thin crispy pancake with chutney.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLLFCOjSc9TLICJ9myaFU0LPwM3diEelCHg&s",
      video: "https://www.youtube.com/embed/_41t4etUF9Y"
    },
    {
      name: "Vada Pav",
      state: "Maharashtra",
      description: "Mumbai’s favorite street burger delight",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVptCP0V3kIacit1Lsv4099Ftjpijb8DKuNw&s",
      video: "https://www.youtube.com/embed/JtZBEkeSUcM"
    },
    {
      name: "Daal Baati Churma",
      state: "Rajasthan",
      description: "Ghee-soaked baati with flavorful dal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CG4zIIVpUf9UtvAkKhFdq5x-HPfMxDVRDA&s",
      video: "https://www.youtube.com/embed/JtZBEkeSUcM"
    },
    {
      name: "Macher Jhol",
      state: "West Bengal",
      description: "Light spicy Bengali fish curry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebGsVGecTypKm6OAWPv-A5z8q6M_63tqZug&s",
      video: "https://www.youtube.com/embed/JtZBEkeSUcM"
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <style>{`
       body {
        margin: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #fafafa;
       }
       .hero {
        width: 100%;
        height: 100vh;
        background-image: url("https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=");
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-shadow: 3px 3px 8px black;
        font-size: 4rem;
        font-weight: bold;
       }
       .section-title {
        text-align: center;
        margin: 40px 0;
        font-size: 2.7rem;
        font-weight: 700;
        color: #ff5722;
       }
       .food-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 35px;
        padding: 0 50px 60px;
       }
       .food-card {
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        overflow: hidden;
        text-align: center;
        transition: 0.3s;
        cursor: pointer;
       }
       .food-card:hover {
        transform: translateY(-7px);
        box-shadow: 0 13px 28px rgba(0,0,0,0.3);
       }
       .food-card img {
        width: 100%;
        height: 230px;
        object-fit: cover;
       }
       .food-card h3 {
        font-size: 1.4rem;
        margin: 12px 0 5px;
        color: #0a5343;
       }
       .food-card p {
        color: #666;
        font-size: 0.95rem;
        margin-bottom: 12px;
       }
       .modal {
        display: flex;
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
       }
       .modal-content {
        position: relative;
        width: 80%;
        max-width: 750px;
       }
       iframe {
        width: 100%;
        height: 430px;
        border-radius: 10px;
        border: none;
       }
       .close-btn {
        position: absolute;
        top: -15px; right: -15px;
        width: 40px; height: 40px;
        font-size: 25px;
        background: #ff3333;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
       }
      `}</style>

      <div className="hero">
        STREET FOOD EXPLORER
      </div>

      <h2 className="section-title">Popular Indian Street Foods</h2>

      <div className="food-grid">
        {foods.map(food => (
          <div className="food-card" key={food.name}>
            <img
              src={food.image}
              alt={food.name}
              onClick={() => setSelectedVideo(food.video)}
            />
            <h3>{food.name}</h3>
            <p>{food.state}</p>
            <p>{food.description}</p>
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div className="modal" onClick={() => setSelectedVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
              &times;
            </button>
            <iframe
              src={selectedVideo}
              title="Food Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

