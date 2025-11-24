import React, { useEffect } from 'react';
import './Mumbai.css';

const foodData = {
    'paranthe': {
        title: 'Paranthe Wali Gali Special',
        image: 'https://img.freepik.com/premium-photo/aloo-paratha-from-india-white-background-concept-indian-cuisine-aloo-paratha-white-background-food-photography-traditional-dish_864588-90149.jpg?w=1480',
        description: 'Famous stuffed flatbreads from the historic Paranthe Wali Gali in Chandni Chowk. These golden, crispy paranthas are stuffed with various fillings and served with tangy pickles, yogurt, and traditional accompaniments.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Pt. Gaya Prasad Shiv Charan' },
            { icon: '💰', label: 'Price Range', value: '₹30 - ₹80' },
            { icon: '🕒', label: 'Best Time', value: '8 AM - 11 AM' },
            { icon: '🌶️', label: 'Spice Level', value: 'Medium' }
        ]
    },
    'jalebi': {
        title: 'Crispy Golden Jalebi',
        image: 'https://wallpaperaccess.com/full/8089728.jpg',
        description: "Spiral-shaped sweet treat made from deep-fried batter, soaked in sugar syrup. Best enjoyed hot and crispy from Old Delhi's traditional sweet shops.",
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Old Famous Jalebi Wala' },
            { icon: '💰', label: 'Price Range', value: '₹40 - ₹100/kg' },
            { icon: '🕒', label: 'Best Time', value: '9 AM - 6 PM' },
            { icon: '🍯', label: 'Sweetness', value: 'Very Sweet' }
        ]
    },
    'samosa': {
        title: 'Crispy Delhi Samosa',
        image: 'https://foodiemag.co.za/wp-content/uploads/2023/06/deep-fried-samosas-dumplings-gourmet-appetizer-generated-by-ai-scaled.jpg',
        description: 'Triangular pastry filled with spiced potatoes, peas, and sometimes meat. A popular street snack served with mint and tamarind chutneys.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Jung Bahadur Kachori Wala' },
            { icon: '💰', label: 'Price Range', value: '₹10 - ₹25' },
            { icon: '🕒', label: 'Best Time', value: '4 PM - 8 PM' },
            { icon: '🌶️', label: 'Spice Level', value: 'Medium to Hot' }
        ]
    },
    'momos': {
        title: 'Steamed Tibetan Momos',
        image: 'https://buddymantra.com/wp-content/uploads/2020/08/6f981e5c-tandoori-momos-nazims-gurgaon-scaled.jpg',
        description: 'Delicate steamed dumplings filled with vegetables or meat, served with spicy red chutney. A popular Tibetan dish that has become a Delhi favorite.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Majnu Ka Tilla' },
            { icon: '💰', label: 'Price Range', value: '₹50 - ₹120' },
            { icon: '🕒', label: 'Best Time', value: '5 PM - 10 PM' },
            { icon: '🌶️', label: 'Spice Level', value: 'Medium to Hot' }
        ]
    },
    'kathi-rolls': {
        title: 'Khan Market Kathi Rolls',
        image: 'https://www.scrumptiously.com/wp-content/uploads/2024/06/ChickenKathiRoll.webp',
        description: 'Flaky paratha wrapped around spiced kebabs, vegetables, and chutneys. Originally from Kolkata but perfected by Delhi street vendors.',
        details: [
            { icon: '🏪', label: 'Best Place', value: "Nizam's Kathi Kabab" },
            { icon: '💰', label: 'Price Range', value: '₹80 - ₹150' },
            { icon: '🕒', label: 'Best Time', value: '6 PM - 11 PM' },
            { icon: '🌶️', label: 'Spice Level', value: 'Medium' }
        ]
    },
    'kulfi': {
        title: 'Traditional Kulfi',
        image: 'https://platinitwithwendy.com/wp-content/uploads/2023/05/DSC_2223-1-1920x1280.jpeg',
        description: 'Dense, creamy frozen dessert made from reduced milk, flavored with cardamom, saffron, and pistachios. Served on sticks or in earthen pots.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Kuremal Mohan Lal Kulfi' },
            { icon: '💰', label: 'Price Range', value: '₹30 - ₹80' },
            { icon: '🕒', label: 'Best Time', value: '12 PM - 10 PM' },
            { icon: '🥛', label: 'Base', value: 'Pure Milk' }
        ]
    },
    'seekh-kebab': {
        title: "Karim's Seekh Kebab",
        image: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/beef-3547078_1280.jpg',
        description: "Succulent minced meat skewers grilled to perfection with aromatic spices. A signature dish from the legendary Karim's restaurant established in 1913.",
        details: [
            { icon: '🏪', label: 'Best Place', value: "Karim's Jama Masjid" },
            { icon: '💰', label: 'Price Range', value: '₹120 - ₹200' },
            { icon: '🕒', label: 'Best Time', value: '7 PM - 11 PM' },
            { icon: '🌶️', label: 'Spice Level', value: 'Medium to Hot' }
        ]
    },
    'biryani': {
        title: "Karim's Special Biryani",
        image: 'https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg',
        description: 'Fragrant basmati rice layered with tender meat and aromatic spices, slow-cooked in sealed pots. A royal dish with Persian origins.',
        details: [
            { icon: '🏪', label: 'Best Place', value: "Karim's & Al Jawahar" },
            { icon: '💰', label: 'Price Range', value: '₹200 - ₹400' },
            { icon: '🕒', label: 'Best Time', value: '12 PM - 3 PM, 7 PM - 11 PM' },
            { icon: '🌿', label: 'Specialty', value: 'Dum Cooked' }
        ]
    },
    'nihari': {
        title: 'Slow-Cooked Nihari',
        image: 'https://migrationology.com/wp-content/uploads/2018/11/nihari-lahore.jpg',
        description: 'Rich, spicy stew made with tender meat slow-cooked overnight with aromatic spices. Traditionally eaten for breakfast with naan.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Kallu Nihari' },
            { icon: '💰', label: 'Price Range', value: '₹150 - ₹300' },
            { icon: '🕒', label: 'Best Time', value: '6 AM - 11 AM' },
            { icon: '🔥', label: 'Cooking', value: 'Overnight Slow Cook' }
        ]
    },
    'bhel-puri': {
        title: 'Tasty Bhel-Puri',
        image: 'https://www.yummyoyummy.com/wp-content/uploads/2016/09/Bhel-puri2.jpg',
        description: 'Rich, spicy stew made with tender meat slow-cooked overnight with aromatic spices. Traditionally eaten for breakfast with naan.',
        details: [
            { icon: '🏪', label: 'Best Place', value: 'Kallu Nihari' },
            { icon: '💰', label: 'Price Range', value: '₹150 - ₹300' },
            { icon: '🕒', label: 'Best Time', value: '6 AM - 11 AM' },
            { icon: '🔥', label: 'Cooking', value: 'Overnight Slow Cook' }
        ]
    }
};

export function Mumbai() {
    useEffect(() => {
        document.title = 'Delhi Street Food Explorer';

        function openFoodModal(foodId) {
            const food = foodData[foodId.toLowerCase().replace(/\s+/g, '-')] || foodData[foodId];
            if (!food) return;

            const modal = document.getElementById('foodModal');
            const modalHeader = document.getElementById('modalHeader');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalDetails = document.getElementById('modalDetails');

            // Set header background
            if (modalHeader) modalHeader.style.backgroundImage = `url('${food.image}')`;
            // Set content
            if (modalTitle) modalTitle.textContent = food.title;
            if (modalDescription) modalDescription.textContent = food.description;

            // Clear and populate details

            if (modalDetails) {  

            if (modalDetails) {

                modalDetails.innerHTML = '';
                food.details.forEach(detail => {
                    const detailCard = document.createElement('div');
                    detailCard.className = 'detail-card';
                    detailCard.innerHTML = `\n                        <div class="detail-icon">${detail.icon}</div>\n                        <div class="detail-label">${detail.label}</div>\n                        <div class="detail-value">${detail.value}</div>\n                    `;
                    modalDetails.appendChild(detailCard);
                });
            }

            if (modal) modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('foodModal');
            if (modal) modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        window.openFoodModal = openFoodModal; // expose for debugging if needed
        window.closeFoodModal = closeModal;

        window.onclick = function(event) {
            const modal = document.getElementById('foodModal');
            if (event.target === modal) {
                closeModal();
            }
        };

        // Intersection Observer for scroll animations
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.place-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(card);
        });

        // Add pulse animation to random food items
        const pulseInterval = setInterval(() => {
            const foodImages = document.querySelectorAll('.food-image');
            if (!foodImages.length) return;
            const randomImage = foodImages[Math.floor(Math.random() * foodImages.length)];
            if (!randomImage) return;
            randomImage.classList.add('pulse');
            setTimeout(() => randomImage.classList.remove('pulse'), 2000);
        }, 3000);

        // Smooth scroll
        document.documentElement.style.scrollBehavior = 'smooth';

        // Attach click handlers for food-item elements that have data-food
        const items = document.querySelectorAll('.food-item');
        items.forEach(item => {
            const foodId = item.getAttribute('data-food');
            if (foodId) {
                item.addEventListener('click', () => openFoodModal(foodId));
            }
            item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.05) rotate(2deg)');
            item.addEventListener('mouseleave', () => item.style.transform = 'scale(1) rotate(0deg)');
        });

        return () => {
            clearInterval(pulseInterval);
            observer.disconnect();
            // cleanup listeners
            items.forEach(item => {
                item.replaceWith(item.cloneNode(true));
            });
            window.onclick = null;
        };
    }, []);

    return (
        <div>
            <div className="hero-section" style={{ height: '60vh', position: 'relative', overflow: 'hidden', backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/1014015423_Mumbai.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* Fallback <img> in case CSS background doesn't load or is blocked */}
                <img
                    src="https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/xlarge/1014015423_Mumbai.jpg"
                    alt="Mumbai skyline"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }}
                />
                <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
                    <h1>Mumbai Street Food Explorer</h1>
                    <p>Discover the authentic flavors of Mumbai's bustling streets</p>
                </div>
            </div>

            <div id="foodModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header" id="modalHeader">
                        <div className="modal-overlay"></div>
                        <span className="close" onClick={() => window.closeFoodModal ? window.closeFoodModal() : null}>&times;</span>
                        <h2 className="modal-title" id="modalTitle"></h2>
                    </div>
                    <div className="modal-body">
                        <p className="food-description" id="modalDescription"></p>
                        <div className="food-details" id="modalDetails"></div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h2 className="section-title">Famous Street Food Destinations</h2>

                <div className="food-places" id="foodPlaces">
                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://staybloom.com/content/1667989923991-Bandra-Worli%20Sea%20Link%20Desktop.jpg')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">Bandra</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item" data-food="Pani Puri">
                                    <img src="https://cdn1.foodviva.com/static-content/food-images/snacks-recipes/pani-puri/pani-puri.jpg" alt="Pani Puri" className="food-image" />
                                    <div className="food-name">Pani Puri</div>
                                </div>
                                <div className="food-item" data-food="Frankie Rolls">
                                    <img src="https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg" alt="Frankie Rolls" className="food-image" />
                                    <div className="food-name">Frankie Rolls</div>
                                </div>
                                <div className="food-item" data-food="Brun Maska with Chai">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/5b/a8/cf/bun-maska-and-chai.jpg" alt="Brun Maska with Chai" className="food-image" />
                                    <div className="food-name">Brun Maska with Chai</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://static.toiimg.com/photo/104951887.cms ')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">CST</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item" data-food="Bombay Sandwich">
                                    <img src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/garlic_bread_bombay_76544_16x9.jpg" alt="Bombay Sandwich" className="food-image" />
                                    <div className="food-name">Bombay Sandwich</div>
                                </div>
                                <div className="food-item" data-food="Falooda">
                                    <img src="https://content.jdmagicbox.com/v2/comp/mumbai/b2/022pxx22.xx22.210903124742.s2b2/catalogue/a1-falooda-cawasji-patel-tank-mumbai-falooda-rabri-centres-fyf0nh9av5-250.jpg" alt="Falooda" className="food-image" />
                                    <div className="food-name">Falooda</div>
                                </div>
                                <div className="food-item" data-food="Vada Pav">
                                    <img src="https://blog.swiggy.com/wp-content/uploads/2024/11/Image-1_mumbai-vada-pav-1024x538.png" alt="Vada Pav" className="food-image" />
                                    <div className="food-name">Vada Pav</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://live.staticflickr.com/3423/3932305853_982ac5f263_b.jpg')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">Mohammed Ali Road</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item" data-food="seekh-kebab">
                                    <img src="https://cdn.pixabay.com/photo/2018/07/18/19/12/beef-3547078_1280.jpg" alt="Kebab" className="food-image" />
                                    <div className="food-name">Seekh Kebab</div>
                                </div>
                                <div className="food-item" data-food="Malpua with Rabdi">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbOcnhlklsrSSRo3DxoyoQllZbt0UsjYy4A&s" alt="Malpua with Rabdi" className="food-image" />
                                    <div className="food-name">Malpua with Rabdi</div>
                                </div>
                                <div className="food-item" data-food="nihari">
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/03/a3/fe/nalli-nihari.jpg" alt="Nihari" className="food-image" />
                                    <div className="food-name">Nalli Nihari</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://yatrirailways.com/bl-content/uploads/pages/4c7c6ba1f469c2edae5c7a267354101e/Juhu-Beach.png')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">Juhu Beach</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item">
                                    <img src="https://www.yummyoyummy.com/wp-content/uploads/2016/09/Bhel-puri2.jpg" alt="Chaat" className="food-image" />
                                    <div className="food-name">Bhel Puri</div>
                                </div>
                                <div className="food-item">
                                    <img src="https://content.jdmagicbox.com/v2/comp/mumbai/r6/022pxx22.xx22.120207130557.p7r6/catalogue/jai-jawan-gola-center-grant-road-mumbai-desserts-restaurants-k568kc704j-250.jpg" alt="Gola" className="food-image" />
                                    <div className="food-name">Gola</div>
                                </div>
                                <div className="food-item">
                                    <img src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg" alt="Pav Bhaji" className="food-image" />
                                    <div className="food-name">Pav Bhaji</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/borivali-mumbai-04-april-2023-600nw-2638821879.jpg')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">Borivali</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item">
                                    <img src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/29/Pictures/_440ab4cc-631f-11e8-a998-12ee0acfa260.jpg" alt="Dhokla & Khandvi " className="food-image" />
                                    <div className="food-name">Dhokla & Khandvi </div>
                                </div>
                                <div className="food-item">
                                    <img src="https://im.whatshot.in/img/2019/Mar/shrikhand-cropped-1-1551961885.jpg" alt="Shrikhand" className="food-image" />
                                    <div className="food-name">Shrikhand</div>
                                </div>
                                <div className="food-item">
                                    <img src="https://i.ndtvimg.com/i/2017-07/gujarati-thali-620x350_620x350_81500012551.jpg" alt="Gujarati Thali" className="food-image" />
                                    <div className="food-name">Gujarati Thali</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="place-card">
                        <div className="place-image" style={{ backgroundImage: "url('https://blogs.tripzygo.in/wp-content/uploads/2024/06/Crawford-Market-in-Mumbai-1.jpg')" }}>
                            <div className="place-overlay">
                                <h3 className="place-name">Crawford Market Area</h3>
                            </div>
                        </div>
                        <div className="place-content">
                            <div className="famous-foods">
                                <div className="food-item">
                                    <img src="https://static.wixstatic.com/media/91e241_f75c3d2ed6b6464c987b583b8d00a891~mv2.jpg/v1/fill/w_568,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/91e241_f75c3d2ed6b6464c987b583b8d00a891~mv2.jpg" alt="Chicken Tikka Rolls" className="food-image" />
                                    <div className="food-name">Chicken Tikka Rolls</div>
                                </div>
                                <div className="food-item">
                                    <img src="https://www.cookwithkushi.com/wp-content/uploads/2021/10/IMG_2462d.jpg" alt="Bombay Halwa" className="food-image" />
                                    <div className="food-name">Bombay Halwa</div>
                                </div>
                                <div className="food-item">
                                    <img src="https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Pav Bhaji" className="food-image" />
                                    <div className="food-name">Pav Bhaji</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
