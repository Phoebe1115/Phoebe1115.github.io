  let currentPage = 1;
        const subjectsPerPage = 7;
        const subjects = [
            { name: "OC1", description: "Orientation Course 1", units: 3 },
            { name: "CSIT1", description: "Introduction To Computing", units: 3 },
            { name: "CSIT2", description: "Fundamentals Of Programming", units: 3 },
            { name: "NSTP11L", description: "NSTP 1-Literacy Training Service", units: 3 },
            { name: "PE1", description: "Path Fit 1: Movement Competency", units: 2 },
            { name: "SOCSC1", description: "Understanding The Self", units: 3 },
            { name: "ENGLA", description: "Grammar And Speech Enhancement", units: 3 },
            { name: "CSIT3", description: "Intermediate Programming", units: 3 },
            { name: "ITP1", description: "IT Fundamentals", units: 3 },
            { name: "ITP2", description: "Discrete Mathematics", units: 3 },
            { name: "MATH1", description: "Mathematics In The Modern World", units: 3 },
            { name: "NSTP12L", description: "NSTP 2-Literacy Training Service II", units: 3 },
            { name: "PE2", description: "Path Fit 2: Fitness Training", units: 2 },
            { name: "EP1S", description: "English Proficiency - Start I", units: 3 },
            { name: "ITP3", description: "Networking 1 (Cisco 1)", units: 3 },
            { name: "ITEL1A", description: "IT Elective 1: Platform Technologies", units: 3 },
            { name: "ITEL2A", description: "IT Elective 2: OOP", units: 3 },
            { name: "HIST1", description: "Readings In Philippine History", units: 3 },
            { name: "SOC ECON1", description: "The Contemporary World", units: 3 },
            { name: "PE3", description: "Path Fit 3: Sports", units: 2 },
            { name: "CSIT4", description: "Data Structures And Algorithms", units: 3 }
        ];

        let currentSlide = 0;

        function showContent(section) {
            let content = document.getElementById("main-content");
            if (section === "about") {
                content.innerHTML = `
                    <h2>About Me</h2>
                    <div style="display: flex; align-items: center;">
                        <img src="dl.png" alt="Profile Picture" style="width: 350px; height: 350px; margin-right: 20px;">
                        <div>
                             <p><i>Hi! I'm Hanna Thea T. Geno, I live in Pigcarangan Tubod Lanao del Norte and I'm 19 years of age. I like to spend my time watching anime and eating. I aspire to become successful in the future so that I can help my Family. I love Doraemon so much and I love the color Blue or Sky Blue, that's it and have a good day!</i></p>
                            <p><b>Name:</b> Hanna Thea T. Geno</p>
                            <p><b>Address:</b> Pigcarangan Tubod Lanao del Norte</p>
                            <p><b>Gender:</b> Female</p>
                            <p><b>Age:</b> 19</p>               
                            <p><b>Date of Birth:</b> April 20, 2005</p>
                            <p><b>Civil Status:</b> Single</p>
                            <p><b>Contact Number:</b> 09454080775</p>
                            <p><b>Email:</b> doraemonlivelonglife@gmail.com</p>
                        </div>
                    </div>`;
            } else if (section === "subjects") {
                displaySubjects(currentPage);
            } else if (section === "enrolled") {
                content.innerHTML = `
                    <h2>Enrolled Subjects</h2>
                    <table>
                        <tr>
                            <th>Schedule</th>
                            <th>Subject Name</th>
                            <th>Description</th>
                            <th>Units</th>
                        </tr>
                        <tr><td>Mon & Wed / (04100510P / 11101240N)</td><td>ITP4</td><td>Integrative Programming</td><td>3</td></tr>
                        <tr><td>Mon & Wed / (09351035A / 08000930A)</td><td>ITP5</td><td>Networking 2</td><td>3</td></tr>
                        <tr><td>Mon & Wed / (11101210N / 01000230P)</td><td>ITP6</td><td >Introduction to HCI</td><td>3</td></tr>
                        <tr><td>Fri / 08001100A</td><td>PHILO1</td><td>Ethics</td><td>3</td></tr>
                        <tr><td>Fri / 06000800A</td><td>PE4</td><td>Path Fit 4</td><td>2</td></tr>
                        <tr><td>Mon & Wed / 02350405P</td><td>COM1</td><td>Purposive Communication</td><td>3</td></tr>
                        <tr><td>Tue & Thu / (03050405P / 04100540P)</td><td>CSIT5</td><td>Information Management</td><td>3</td></tr>
                    </table>`;
            } else if (section === "contact") {
                content.innerHTML = `
                    <h2>Contact Me</h2>
                    <p><b>Email:</b> doraemonlivelonglife@gmail.com</a></a>
                    <p><b>Phone:</b> 09454080775</p>
                    <p><b>Facebook Link:</b> <a href="https://www.facebook.com/hanna.thea.568" target="_blank">My Facebook Profile</a></p>`;
            } else if (section === "favorites") {
                content.innerHTML = `
                    <h2>My Favorites</h2>
                    <p><b>Song:</b> The Archer (A song by Taylor Swift from her 2019 album Lover.)</p>
                    <p><b>Food:</b> Pizza (A savory dish with a baked crust, topped with tomato sauce, cheese, and various toppings.)</p>
                    <p><b>Hobby:</b> Watching Movie (Watching a movie is an immersive experience where you sit back, focus on the screen, and face the screen.) </p>
                    <p><b>Music Genre:</b> Romance (A music genre features songs that emphasize love, relationships, and deep emotions.)</p>
                    <p><b>Movie:</b> A little thing called love (A 2010 Thai romantic comedy-drama film.)</p>
                    <p><b>Color:</b> Sky Blue (A soft light shade of blue that resembles the color of a clear daytime sky.)</p>
                    <p><b>Sport:</b> Badminton ( A fast-paced racket sport played with a shuttlecock and rackets, either in singles or doubles.)</p>
                    <p><b>Book:</b> Baka Sakali (Baka Sakali is a novel by Jonaxx, a well-known Filipino author famous for her deeply emotional and engaging romance stories.)</p>
                    <p><b>Game:</b> Call of Duty (An online Gun Game.)</p>
                    <p><b>Travel Destination:</b> Japan (Japan is an island nation in East Asia known for its rich culture, advanced technology, and beautiful landscapes.)</p>`;
            } else if (section === "gallery") {
                content.innerHTML = `
                    <h2>Gallery</h2>
                    <div class="carousel" style="margin-top: 10px;"> 
                        <div class="carousel-images" id="carousel-images">
                            <img src="a.jpg"  class="active">
                            <img src="m.jpg" >
                            <img src="p.jpg" >
                            <img src="d.jpg" >
                            <img src="e.jpg" >
                            <img src="f.jpg" >
                            <img src="mn.jpg">
                            <img src="h.jpg" >
                            <img src="k.jpg" >
                            <img src="i.jpg" >
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-top: 10px;">
                            <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
                            <button class="next" onclick="changeSlide(1)">&#10095;</button>
                        </div>
                    </div>`;
            }
        }

        function displaySubjects(page) {
            const content = document.getElementById("main-content");
            const start = (page - 1) * subjectsPerPage;
            const end = start + subjectsPerPage;
            const paginatedSubjects = subjects.slice(start, end);

            let subjectTable = `<h2>Subjects Taken</h2>
                                <table>
                                    <tr>
                                        <th>Subject Name</th>
                                        <th>Description</th>
                                        <th> Units</th>
                                    </tr>`;
            paginatedSubjects.forEach(subject => {
                subjectTable += `<tr>
                                    <td>${subject.name}</td>
                                    <td>${subject.description}</td>
                                    <td>${subject.units}</td>
                                 </tr>`;
            });
            subjectTable += `</table>
                             <div class="pagination">
                                 <button onclick="changePage(${page - 1})" ${page === 1 ? 'disabled' : ''}>Prev</button>`;
            for (let i = 1; i <= 3; i++) {
                subjectTable += `<button onclick="changePage(${i})" ${i === page ? 'class="active"' : ''}>${i}</button>`;
            }
            subjectTable += `<button onclick="changePage(${page + 1})" ${page === 3 ? 'disabled' : ''}>Next</button>
                             </div>`;
            content.innerHTML = subjectTable;
        }

        function changePage(page) {
            if (page < 1 || page > 3) return;
            currentPage = page;
            displaySubjects(currentPage);
        }

        function changeSlide(direction) {
            const images = document.getElementById("carousel-images");
            const totalSlides = images.children.length;
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
            Array.from(images.children).forEach((img, index) => {
                img.classList.remove('active');
                if (index === currentSlide) {
                    img.classList.add('active');
                }
            });
        }

        window.onload = function() {
            showContent('about');
        };