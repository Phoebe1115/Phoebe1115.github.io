let currentImageIndex = 0;
    function startTour() {
      document.getElementById('start-page').style.display = 'none';
      document.getElementById('top-bar').classList.remove('hidden');
      document.getElementById('frame').classList.remove('hidden');
      showHome();
    }
    function showPlaceDetails(index) {
      const places = [
        {
          name: "Snake Island",
          img: "snake/snk.jpg",
          history: "Named for its winding, snake-like sandbar, Snake Island in El Nido, Palawan, is a natural wonder that appears during low tide. This unique formation connects two lush islands, allowing visitors to walk across shallow waters while surrounded by breathtaking views. The island is covered in dense greenery, offering a contrast to the white sand and crystal-clear sea. From the top of a nearby viewpoint, tourists can admire the curving sandbar in its full glory. Once a quiet and untouched spot, it has now become a must-visit destination for island-hopping tours. Despite its growing popularity, Snake Island retains its serene and magical charm, making it a favorite for travelers seeking a picturesque escape.",
          howToGet: "To reach Snake Island, you need to join an island-hopping tour in El Nido, specifically Tour B. Boats depart from El Nido town proper and take around 30 to 40 minutes to arrive at the island. The journey offers scenic views of limestone cliffs and turquoise waters along the way. Since the sandbar is only visible during low tide, it's best to check the tide schedule before planning your visit."
          
        },
        {
          name: "Secret Lagoon",
          img: "secret lagoon/tt.jpg",
          history: "Tucked away behind towering karst cliffs, Secret Lagoon is a hidden treasure accessible through a small rock opening. Once inside, visitors discover a shallow natural pool enclosed by dramatic limestone walls, creating an otherworldly atmosphere. The lagoon’s still, emerald-green waters provide a peaceful escape, reflecting the beauty of its rugged surroundings. At high tide, the entrance partially submerges, making entry an adventurous experience for those seeking a thrill. The towering cliffs and secluded ambiance make it feel like a secret world, untouched by time. For many, visiting Secret Lagoon is a highlight of their island-hopping journey, offering a moment of pure serenity and awe.",
          howToGet: "Secret Lagoon is included in El Nido’s island-hopping Tour A, making it easily accessible by boat. The trip from the town proper takes about 40 minutes, with scenic views along the way. Boats dock near the entrance, and visitors must wade through shallow waters and pass through a small opening in the rocks to enter. Since it can get crowded, visiting early in the day offers a more peaceful experience."
        },
        {
          name: "Small Lagoon",
          img: "small lagoon/sml.jpg",
          history: "Small Lagoon is one of El Nido’s most enchanting spots, known for its tranquil, crystal-clear waters and hidden entrance. To enter, visitors must kayak or swim through a narrow rock passage, unveiling a secluded paradise surrounded by limestone cliffs. The calm waters make it perfect for swimming, snorkeling, and peacefully floating while taking in the breathtaking scenery. Sunlight reflects off the limestone walls, casting an ethereal glow over the lagoon’s emerald waters. The echoes of nature create a soothing atmosphere, making it a favorite destination for those seeking relaxation. Small Lagoon’s magical setting and untouched beauty offer an unforgettable experience in the heart of Palawan’s stunning landscapes.",
          howToGet: "Small Lagoon is part of El Nido’s island-hopping Tour A and is about a 30-minute boat ride from town. Upon arrival, visitors can rent a kayak or swim through a narrow rock passage to enter the lagoon. Since motorized boats are not allowed inside, the area remains quiet and pristine. "
        },
        {
          name: "Shimizu Island",
          img: "shimizu island/mizu.jpg",
          history: "Named after a Japanese diver who explored its depths, Shimizu Island is a paradise for snorkeling and marine life enthusiasts. Its surrounding waters are home to vibrant coral reefs, schools of tropical fish, and other fascinating sea creatures. Towering limestone cliffs surround the island, creating a stunning backdrop for exploration both above and below the water. The island’s shallow coral gardens make it an ideal spot for beginner snorkelers and experienced divers alike. With its crystal-clear waters and rich biodiversity, Shimizu Island showcases the vibrant marine ecosystem that makes El Nido world-famous. Whether enjoying a picnic on its small sandy beach or swimming among colorful fish, visitors are always captivated by its natural beauty.",
          howToGet: "Shimizu Island is part of El Nido’s island-hopping Tour A, which departs from the town proper. The boat ride takes around 30 minutes, passing through stunning seascapes along the way. This island is a popular snorkeling stop, so bringing or renting snorkeling gear is highly recommended. Since lunch is often served here during the tour, visitors can enjoy a meal while admiring the island’s beauty."
        },
        {
          name: "Hidden Beach",
          img: "hidden/hid.jpg",
          history: "True to its name, Hidden Beach is concealed behind towering limestone cliffs, making it a secret paradise in El Nido. Accessible only by boat, visitors must wade through shallow waters or swim through an opening to reach its pristine shores. The beach boasts powdery white sand, surrounded by jagged rock formations that create a secluded, dreamlike setting. Its calm, turquoise waters provide an ideal spot for snorkeling, where colorful marine life thrives beneath the surface. Many believe Hidden Beach was an inspiration for the legendary novel The Beach due to its untouched beauty. Enclosed by nature, this secluded hideaway offers a rare and unforgettable escape from the outside world.",
          howToGet: "Hidden Beach is accessible via El Nido’s island-hopping Tour C, which includes a boat ride from the town proper. The trip takes approximately 45 minutes to an hour, depending on sea conditions. Since the beach is enclosed by limestone cliffs, boats anchor outside, and visitors must swim or wade through shallow waters to enter. Wearing aqua shoes is recommended to navigate the rocky seabed safely."
        },
        {
          name: "Nacpan Beach",
          img: "nacpan/nac.jpg",
          history: "Nacpan Beach is famous for its four-kilometer stretch of golden sand, making it one of Palawan’s most stunning coastlines. The beach is part of the Twin Beaches, with its neighbor, Calitang Beach, offering a breathtaking view from a nearby hill. Once a quiet fishing village, Nacpan has gradually gained attention for its natural beauty while still preserving its peaceful charm. The crystal-clear waters and gentle waves make it a perfect destination for swimming and sunbathing. Small local restaurants and coconut trees line the shore, adding to the tropical paradise atmosphere. Whether for relaxation or adventure, Nacpan Beach remains one of El Nido’s most beloved gems.",
          howToGet: "Nacpan Beach is about 45 minutes to an hour away from El Nido town by land. Visitors can rent motorbikes, take a tricycle, or book a van to reach the beach. The last part of the journey includes a bumpy dirt road, but the breathtaking view upon arrival makes it worthwhile. Entrance fees may apply, and there are local eateries and accommodations available near the shore."
        }
      ];
      const place = places[index];
      document.getElementById('place-img').src = place.img;
      document.getElementById('place-name').innerText = place.name;
      document.getElementById('place-history').innerText = place.history;
      document.getElementById('place-how-to-get').innerText = place.howToGet;
      hideAllSections();
      document.getElementById('place-details').classList.remove('hidden');
    }
    function hideAllSections() {
      document.getElementById('main-content').classList.add('hidden');
      document.getElementById('history').classList.add('hidden');
      document.getElementById('adventures').classList.add('hidden');
      document.getElementById('more-photos').classList.add('hidden');
      document.getElementById('contact-page').classList.add('hidden');
      document.getElementById('place-details').classList.add('hidden');
    }
    function showHome() {
      hideAllSections();
      document.getElementById('main-content').classList.remove('hidden');
    }
    function showHistoryPage() {
      hideAllSections();
      document.getElementById('history').classList.remove('hidden');
    }
    function showContact() {
      hideAllSections();
      document.getElementById('contact-page').classList.remove('hidden');
    }
    function showMorePhotos() {
      hideAllSections();
      document.getElementById('more-photos').classList.remove('hidden');
    }
    function showAdventures() {
      hideAllSections();
      document.getElementById('adventures').classList.remove('hidden');
    }
    function nextImage() {
      const images = document.querySelectorAll('#carousel-images img');
      currentImageIndex = (currentImageIndex === images.length - 1)
        ? 0
        : currentImageIndex + 1;
      updateCarousel();
    }
    function prevImage() {
      const images = document.querySelectorAll('#carousel-images img');
      currentImageIndex = (currentImageIndex === 0)
        ? images.length - 1
        : currentImageIndex - 1;
      updateCarousel();
    }
    function updateCarousel() {
      const offset = -currentImageIndex * 300;
      document.getElementById('carousel-images').style.transform = `translateX(${offset}px)`;
    }