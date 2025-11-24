import React, { useEffect } from "react";
import "./tamil.css";

function TamilPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".place-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    const interval = setInterval(() => {
      const foodImages = document.querySelectorAll(".food-image");
      if (foodImages.length > 0) {
        const randomImage =
          foodImages[Math.floor(Math.random() * foodImages.length)];
        randomImage.classList.add("pulse");
        setTimeout(() => randomImage.classList.remove("pulse"), 2000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Tamil Nadu Street Food Explorer</h1>
          <p>Discover the authentic flavors of Tamil Nadu's bustling streets</p>
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Famous Street Food Destinations</h2>

        <div className="food-places">
          {/* Chennai */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFtaWwlMjBuYWR1fGVufDB8fDB8fHww')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Marina Beach, Chennai</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Sundul",
                    img: "https://img.freepik.com/premium-photo/aloo-paratha-from-india-white-background-concept-indian-cuisine-aloo-paratha-white-background-food-photography-traditional-dish_864588-90149.jpg?w=1480",
                  },
                  {
                    name: "Murukku",
                    img: "https://traditionallymodernfood.com/wp-content/uploads/2022/10/poondu-murukku-garlic-murukku-35-scaled.jpeg",
                  },
                  {
                    name: "Bhajji",
                    img: "https://rakskitchen.net/wp-content/uploads/-000//1/10590086154_1f14c0af56_z.jpg",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Madurai */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/71/bf/0e/madurai-meenakshi-temple.jpg?w=1000&h=1000&s=1')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Madurai Streets</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Jigarthanda",
                    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jigarthanda.JPG/1200px-Jigarthanda.JPG",
                  },
                  {
                    name: "Parotta",
                    img: "https://c.ndtvimg.com/2021-05/tj7sdqj8_parotta_625x300_14_May_21.jpg",
                  },
                  {
                    name: "Kari Dosa",
                    img: "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1638949721743-CB9CAXY9K8SSIV9K6FYO/WhatsApp+Image+2021-12-08+at+1.14.56+PM.jpeg",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coimbatore */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CHIL_SEZ.jpg/960px-CHIL_SEZ.jpg')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Coimbatore Street Food</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Kozhi Porichathu",
                    img: "https://www.sashirecipes.com/wp-content/uploads/2012/10/Dry-Chicken-Fry.jpg",
                  },
                  {
                    name: "Thatte Idli",
                    img: "https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2020/10/12/idli-tamil-nadu.jpg/photos/4x3/photo.jpg",
                  },
                  {
                    name: "Filter Coffee",
                    img: "https://static.toiimg.com/thumb/msid-108018037,width-1280,height-720,resizemode-4/108018037.jpg",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tiruchirappalli */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://s3.india.com/wp-content/uploads/2024/05/Feature-Image_-Tiruchirappalli-2.jpg?impolicy=Medium_Widthonly&w=350&h=263')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Tiruchirappalli</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Rasam",
                    img: "https://c.ndtvimg.com/r0fobft8_rasam_625x300_24_July_18.jpg",
                  },
                  {
                    name: "Kalyana Biriyani",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMtbRXnz9UN23SfMRtcRMKmqAx1lcPmzpKQ&s",
                  },
                  {
                    name: "Thavala Vadai",
                    img: "https://traditionallymodernfood.com/wp-content/uploads/2024/08/thavala-vadai-mixed-lentil-fritter-29.jpeg",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rameshwaram */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://blogs.pathbeat.in/wp-content/uploads/2024/05/rameswaram-temple-1656167436_f2c551193bb7d4bc6f70.webp')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Rameshwaram</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Elai Sappadu",
                    img: "https://images.archanaskitchen.com/images/recipe-collection/recipe-collections/Yella_Sapad_Banana_leaf_with_dal_vada_payasam_sambar_aloo_roast_cabbage_poriyal_rasam_3_0ea1da876f.jpg",
                  },
                  {
                    name: "Fish Curry",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIWqCsicGYoNN39SB86aLdYBgFVoNIW-Swg&s",
                  },
                  {
                    name: "Sweet Pongal",
                    img: "https://www.cookwithkushi.com/wp-content/uploads/2022/09/best_sweet_pongal_sakkarai_chakkara_pongal_recipe.jpg",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chettinad */}
          <div className="place-card">
            <div
              className="place-image"
              style={{
                backgroundImage:
                  "url('https://www.dailypioneer.com/uploads/2025/story/images/big/chettinad--unleashing-the-ghosts-of-imagination-2025-02-16.jpg')",
              }}
            >
              <div className="place-overlay">
                <h3 className="place-name">Chettinad</h3>
              </div>
            </div>
            <div className="place-content">
              <div className="famous-foods">
                {[
                  {
                    name: "Chettinad Chicken Curry",
                    img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                  },
                  {
                    name: "Kuzhi Paniyaram",
                    img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2019/01/Kuzhi-Paniyaram-H2.jpg?resize=600%2C900&ssl=1",
                  },
                  {
                    name: "Sevai",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo94pMt-oJJ1YxvIf3_VW3BWb0WQVxo4NXzA&s",
                  },
                ].map((food) => (
                  <div className="food-item" key={food.name}>
                    <img src={food.img} alt={food.name} className="food-image" />
                    <div className="food-name">{food.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TamilPage;