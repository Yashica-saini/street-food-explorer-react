import React, { useState, useEffect, useRef } from 'react';

const foodData = {
  'paranthe': {
    title: 'Paranthe Wali Gali Special',
    image: 'https://img.freepik.com/premium-photo/aloo-paratha-from-india-white-background-concept-indian-cuisine-aloo-paratha-white-background-food-photography-traditional-dish_864588-90149.jpg?w=1480',
    description: 'Famous stuffed flatbreads from the historic Paranthe Wali Gali in Chandni Chowk. These golden, crispy paranthas are stuffed with various fillings and served with tangy pickles, yogurt, and traditional accompaniments.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Pt. Gaya Prasad Shiv Charan' },
      { icon: '💰', label: 'Price Range', value: '₹30 - ₹80' },
    ]
  },
  'jalebi': {
    title: 'Crispy Golden Jalebi',
    image: 'https://wallpaperaccess.com/full/8089728.jpg',
    description: 'Spiral-shaped sweet treat made from deep-fried batter, soaked in sugar syrup. Best enjoyed hot and crispy from Old Delhi\'s traditional sweet shops.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Old Famous Jalebi Wala' },
      { icon: '💰', label: 'Price Range', value: '₹40 - ₹100/kg' },
    ]
  },
  'samosa': {
    title: 'Crispy Delhi Samosa',
    image: 'https://foodiemag.co.za/wp-content/uploads/2023/06/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai-scaled.jpg',
    description: 'Triangular pastry filled with spiced potatoes, peas, and sometimes meat. A popular street snack served with mint and tamarind chutneys.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Jung Bahadur Kachori Wala' },
      { icon: '💰', label: 'Price Range', value: '₹10 - ₹25' },
    ]
  },
  'momos': {
    title: 'Steamed Tibetan Momos',
    image: 'https://buddymantra.com/wp-content/uploads/2020/08/6f981e5c-tandoori-momos-nazims-gurgaon-scaled.jpg',
    description: 'Delicate steamed dumplings filled with vegetables or meat, served with spicy red chutney.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Majnu Ka Tilla' },
      { icon: '💰', label: 'Price Range', value: '₹50 - ₹120' },
    ]
  },
  'kathi-rolls': {
    title: 'Khan Market Kathi Rolls',
    image: 'https://www.scrumptiously.com/wp-content/uploads/2024/06/ChickenKathiRoll.webp',
    description: 'Flaky paratha wrapped around spiced kebabs, vegetables, and chutneys.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Nizam\'s Kathi Kabab' },
      { icon: '💰', label: 'Price Range', value: '₹80 - ₹150' },
    ]
  },
  'kulfi': {
    title: 'Traditional Kulfi',
    image: 'https://platinitwithwendy.com/wp-content/uploads/2023/05/DSC_2223-1-1920x1280.jpeg',
    description: 'Dense, creamy frozen dessert made from reduced milk, flavored with cardamom, saffron, and pistachios.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Kuremal Mohan Lal Kulfi' },
      { icon: '💰', label: 'Price Range', value: '₹30 - ₹80' },
    ]
  },
  'seekh-kebab': {
    title: 'Karim\'s Seekh Kebab',
    image: 'https://cluecoded.com/wp-content/uploads/2024/09/seekh-kabab.jpg',
    description: 'Succulent minced meat skewers grilled to perfection with aromatic spices.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Karim\'s Jama Masjid' },
      { icon: '💰', label: 'Price Range', value: '₹120 - ₹200' },
    ]
  },
  'biryani': {
    title: 'Karim\'s Special Biryani',
    image: 'https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg',
    description: 'Fragrant basmati rice layered with tender meat and aromatic spices, slow-cooked in sealed pots.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Karim\'s & Al Jawahar' },
      { icon: '💰', label: 'Price Range', value: '₹200 - ₹400' },
    ]
  },
  'nihari': {
    title: 'Slow-Cooked Nihari',
    image: 'https://migrationology.com/wp-content/uploads/2018/11/nihari-lahore.jpg',
    description: 'Rich, spicy stew made with tender meat slow-cooked overnight with aromatic spices.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Kallu Nihari' },
      { icon: '💰', label: 'Price Range', value: '₹150 - ₹300' },
    ]
  },
  'Bhel Puri': {
    title: 'Tangy Bhel Puri',
    image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/03/bhel-puri-featured.jpg',
    description: 'A light and crunchy chaat made of puffed rice, sev, onions, and chutneys.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Lajpat Nagar Market' },
      { icon: '💰', label: 'Price Range', value: '₹30 - ₹60' },
    ]
  },
  'Aloo Tikki': {
    title: 'Crispy Aloo Tikki',
    image: 'https://cdn.cdnparenting.com/articles/2020/01/26120549/Aloo-tikki-recipe.jpg',
    description: 'Golden fried potato patties seasoned with spices and herbs.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Lajpat Nagar Chaat Corner' },
      { icon: '💰', label: 'Price Range', value: '₹20 - ₹50' },
    ]
  },
  'Golgappa': {
    title: 'Spicy Delhi Golgappe',
    image: 'https://i.ytimg.com/vi/4lBjHXwXnUI/maxresdefault.jpg',
    description: 'Crispy hollow puris filled with tangy flavored water, potatoes, and chickpeas.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Bengali Market' },
      { icon: '💰', label: 'Price Range', value: '₹30 - ₹50' },
    ]
  },
  'Butter Chiken': {
    title: 'Creamy Butter Chicken',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-3.jpg',
    description: 'Juicy chicken cooked in a rich, buttery tomato gravy.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Moti Mahal' },
      { icon: '💰', label: 'Price Range', value: '₹250 - ₹400' },
    ]
  },
  'Naan': {
    title: 'Soft Butter Naan',
    image: 'https://www.recipetineats.com/wp-content/uploads/2021/02/Naan_1-1.jpg',
    description: 'Fluffy, tandoor-baked bread brushed with butter.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Karim\'s' },
      { icon: '💰', label: 'Price Range', value: '₹15 - ₹40' },
    ]
  },
  'Lassi': {
    title: 'Refreshing Punjabi Lassi',
    image: 'https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe-1024x683.jpg',
    description: 'A chilled yogurt-based drink, either sweet or salted.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Amritsari Lassi Wala' },
      { icon: '💰', label: 'Price Range', value: '₹40 - ₹100' },
    ]
  },
  'Chole Bhature': {
    title: 'Fluffy Chole Bhature',
    image: 'https://static.vecteezy.com/system/resources/previews/024/058/840/large_2x/delectable-chole-bhature-a-savory-indian-dish-with-steam-rising-against-a-dark-background-ai-generated-free-photo.jpg',
    description: 'Spicy chickpeas served with huge, fluffy deep-fried bread.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Sitaram Diwan Chand' },
      { icon: '💰', label: 'Price Range', value: '₹60 - ₹120' },
    ]
  },
  'Rajma Chawal': {
    title: 'Comforting Rajma Chawal',
    image: 'https://shwetainthekitchen.com/wp-content/uploads/2020/12/Rajma-Chawal.jpg',
    description: 'Red kidney bean curry slow-cooked with spices and served with rice.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Evergreen Sweet House' },
      { icon: '💰', label: 'Price Range', value: '₹80 - ₹150' },
    ]
  },
  'Pav Bhaji': {
    title: 'Buttery Pav Bhaji',
    image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg',
    description: 'A spicy mashed vegetable curry loaded with butter, served with soft pav buns.',
    details: [
      { icon: '🏪', label: 'Best Place', value: 'Elco Market' },
      { icon: '💰', label: 'Price Range', value: '₹60 - ₹120' },
    ]
  },
};

const placesData = [
  {
    name: 'Chandni Chowk',
    image: 'https://www.thestatesman.com/wp-content/uploads/2021/09/QT-chandni-chowk-fountain-2.jpg',
    foods: [
      { id: 'paranthe', name: 'Paranthe', image: 'https://img.freepik.com/premium-photo/aloo-paratha-from-india-white-background-concept-indian-cuisine-aloo-paratha-white-background-food-photography-traditional-dish_864588-90149.jpg?w=1480' },
      { id: 'jalebi', name: 'Jalebi', image: 'https://wallpaperaccess.com/full/8089728.jpg' },
      { id: 'samosa', name: 'Samosa', image: 'https://foodiemag.co.za/wp-content/uploads/2023/06/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai-scaled.jpg' },
    ]
  },
  {
    name: 'Khan Market',
    image: 'https://assets.zeezest.com/blogs/PROD_B_1675849271740_thumb_1000.jpeg',
    foods: [
      { id: 'momos', name: 'Momos', image: 'https://buddymantra.com/wp-content/uploads/2020/08/6f981e5c-tandoori-momos-nazims-gurgaon-scaled.jpg' },
      { id: 'kathi-rolls', name: 'Kathi Rolls', image: 'https://www.scrumptiously.com/wp-content/uploads/2024/06/ChickenKathiRoll.webp' },
      { id: 'kulfi', name: 'Kulfi', image: 'https://platinitwithwendy.com/wp-content/uploads/2023/05/DSC_2223-1-1920x1280.jpeg' },
    ]
  },
  {
    name: "Karim's (Jama Masjid)",
    image: 'https://i.ytimg.com/vi/fIClEEz1L4I/maxresdefault.jpg',
    foods: [
      { id: 'seekh-kebab', name: 'Seekh Kebab', image: 'https://cluecoded.com/wp-content/uploads/2024/09/seekh-kabab.jpg' },
      { id: 'biryani', name: 'Biryani', image: 'https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg' },
      { id: 'nihari', name: 'Nihari', image: 'https://migrationology.com/wp-content/uploads/2018/11/nihari-lahore.jpg' },
    ]
  },
  {
    name: 'Lajpat Nagar',
    image: 'https://delhitourism.travel/images/tourist-places/lajpat-nagar-market-delhi/lajpat-nagar-market-delhi-tourism-entry-ticket-price.jpg',
    foods: [
      { id: 'Bhel Puri', name: 'Bhel Puri', image: 'https://www.indianveggiedelight.com/wp-content/uploads/2017/03/bhel-puri-featured.jpg' },
      { id: 'Aloo Tikki', name: 'Aloo Tikki', image: 'https://cdn.cdnparenting.com/articles/2020/01/26120549/Aloo-tikki-recipe.jpg' },
      { id: 'Golgappa', name: 'Golgappa', image: 'https://i.ytimg.com/vi/4lBjHXwXnUI/maxresdefault.jpg' },
    ]
  },
  {
    name: 'Daryaganj',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    foods: [
      { id: 'Butter Chiken', name: 'Butter Chicken', image: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-3.jpg' },
      { id: 'Naan', name: 'Naan', image: 'https://www.recipetineats.com/wp-content/uploads/2021/02/Naan_1-1.jpg' },
      { id: 'Lassi', name: 'Lassi', image: 'https://www.spicypunch.com/wp-content/uploads/2019/06/lassi-recipe-1024x683.jpg' },
    ]
  },
  {
    name: 'Sarojini Nagar',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    foods: [
      { id: 'Chole Bhature', name: 'Chole Bhature', image: 'https://static.vecteezy.com/system/resources/previews/024/058/840/large_2x/delectable-chole-bhature-a-savory-indian-dish-with-steam-rising-against-a-dark-background-ai-generated-free-photo.jpg' },
      { id: 'Rajma Chawal', name: 'Rajma Chawal', image: 'https://shwetainthekitchen.com/wp-content/uploads/2020/12/Rajma-Chawal.jpg' },
      { id: 'Pav Bhaji', name: 'Pav Bhaji', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg' },
    ]
  },
];

function App() {
  const [selectedFood, setSelectedFood] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; line-height: 1.6; color: #333; }
        .hero-section {
          height: 60vh;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), 
          url('https://media.istockphoto.com/id/530741074/photo/red-fort-lal-qila-with-indian-flag-delhi-india.jpg?s=612x612&w=0&k=20&c=7BTI-dgQNPPTq2yARrwIBf2yIqO4PUPX1EJY5ITIyoM=');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .hero-content h1 {
          font-size: 4rem;
          color: white;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .hero-content p {
          font-size: 1.5rem;
          color: #f0f0f0;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title { text-align: center; font-size: 3rem; color: #d35400; margin-bottom: 3rem; }
        .food-places { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 3rem; }
        .place-card { background: white; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); overflow: hidden; transition: all 0.3s ease; }
        .place-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
        .place-image { height: 200px; background-size: cover; background-position: center; position: relative; }
        .place-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.7)); display: flex; align-items: flex-end; padding: 1rem; }
        .place-name { color: white; font-size: 1.5rem; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.8); }
        .place-content { padding: 2rem; }
        .famous-foods { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; }
        .food-item { text-align: center; cursor: pointer; transition: transform 0.3s ease; }
        .food-item:hover { transform: scale(1.05); }
        .food-image { width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin: 0 auto 0.5rem; border: 3px solid #e74c3c; display: block; }
        .food-item:hover .food-image { border-color: #d35400; }
        .food-name { font-size: 0.9rem; font-weight: bold; color: #2c3e50; }
        .modal { position: fixed; inset: 0; z-index: 1000; background: rgba(0,0,0,0.8); backdrop-filter: blur(5px); }
        .modal-content { background: white; margin: 5% auto; width: 90%; max-width: 600px; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .modal-header { height: 250px; background-size: cover; background-position: center; position: relative; display: flex; align-items: flex-end; }
        .modal-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)); }
        .modal-title { position: relative; color: white; font-size: 2.5rem; font-weight: bold; padding: 2rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); z-index: 1; }
        .close { position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; font-weight: bold; cursor: pointer; z-index: 2; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); transition: transform 0.3s ease; }
        .close:hover { transform: scale(1.2); }
        .modal-body { padding: 2rem; }
        .food-description { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 1.5rem; }
        .food-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; }
        .detail-card { background: #f8f9fa; padding: 1.5rem; border-radius: 15px; text-align: center; border: 2px solid transparent; transition: all 0.3s ease; }
        .detail-card:hover { border-color: #e74c3c; transform: translateY(-5px); }
        .detail-icon { font-size: 2rem; margin-bottom: 0.5rem; }
        .detail-label { font-weight: bold; color: #2c3e50; margin-bottom: 0.5rem; }
        .detail-value { color: #e74c3c; font-weight: bold; }
        @media (max-width: 768px) {
          .hero-content h1 { font-size: 2.5rem; }
          .hero-content p { font-size: 1.2rem; }
          .section-title { font-size: 2rem; }
          .food-places { grid-template-columns: 1fr; }
        }
      `}</style>

      <div>
        <div className="hero-section">
          <div className="hero-content">
            <h1>Delhi Street Food Explorer</h1>
            <p>Discover the authentic flavors of Delhi's bustling streets</p>
          </div>
        </div>

        {selectedFood && (
          <div className="modal" onClick={(e) => e.currentTarget === e.target && setSelectedFood(null)}>
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundImage: `url('${selectedFood.image}')` }}>
                <div className="modal-overlay"></div>
                <span className="close" onClick={() => setSelectedFood(null)}>&times;</span>
                <h2 className="modal-title">{selectedFood.title}</h2>
              </div>
              <div className="modal-body">
                <p className="food-description">{selectedFood.description}</p>
                <div className="food-details">
                  {selectedFood.details.map((detail, idx) => (
                    <div key={idx} className="detail-card">
                      <div className="detail-icon">{detail.icon}</div>
                      <div className="detail-label">{detail.label}</div>
                      <div className="detail-value">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <h2 className="section-title">Famous Street Food Destinations</h2>
          <div className="food-places">
            {placesData.map((place, index) => (
              <div key={index} className="place-card" ref={el => cardsRef.current[index] = el}>
                <div className="place-image" style={{ backgroundImage: `url('${place.image}')` }}>
                  <div className="place-overlay">
                    <h3 className="place-name">{place.name}</h3>
                  </div>
                </div>
                <div className="place-content">
                  <div className="famous-foods">
                    {place.foods.map((food) => (
                      <div key={food.id} className="food-item" onClick={() => setSelectedFood(foodData[food.id])}>
                        <img src={food.image} alt={food.name} className="food-image" />
                        <div className="food-name">{food.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;