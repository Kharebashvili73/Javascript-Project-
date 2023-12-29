
const contentDiv = document.getElementById('content');
const searchInput = document.getElementById('searchInput');
const movieDetails = document.getElementById('movieDetails');
const registrationForm = document.getElementById('registrationForm');
const registrationDateInput = document.getElementById('registrationDate');

// ფილმების ნაწილი
const movieData = [
  { title: 'Schindlers List', category: 'Drama', description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', actors: 'Liam Nesson', director: 'Steven Spielberg', image: 'https://www.uklfi.com/wp-content/uploads/2022/05/Schindlers-list-200x300.jpg' },
  { title: '12 Angry Men', category: 'Drama, Crime', description: 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', actors: 'Henry Fonda', director: 'sidney lumet', image: 'https://acf-film.com/veloxen/12_angry_men_m.jpg' },
  { title: 'The Godfather Part II', category: 'Drama, Crime', description: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', actors: 'Al Pacino', director: 'Francis Ford Coppola', image: 'https://i0.wp.com/cine-vue.com/wp-content/uploads/2014/02/9aa90-3swvupajaxf555pihl4kbtpqgd5.jpg?resize=200%2C300&ssl=1' },
  { title: 'The Dark Knight', category: 'Action, Drama, Crime', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', actors: 'Christian Bale', director: 'Christopher Nolan', image: 'https://egoamo.co.za/cdn/shop/products/TheDarkKnight_540x.jpg?v=1655785830' },
  { title: 'The Godfather', category: 'Drama, Crime', description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.', actors: 'Marlon Brando', director: 'Francis Ford Coppola', image: 'https://img.icdn.my.id/thumb/w_200/h_300/the-godfather-1630855267.jpg' },
  { title: 'The Shawshank Redemption', category: 'Drama', description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', actors: 'Tim Robbins', director: 'Frank Darabont', image: 'https://egoamo.co.za/cdn/shop/products/1_59ed9566-7d92-4360-8053-87d659f73371_540x.jpg?v=1574998139' },
  { title: ' The Lord of the Rings: The Return of the King', category: 'Action, Adventure, Drama', description: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.', actors: 'Elijah Wood', director: 'Peter Jackson', image: 'https://www.movieartgallery.co.uk/cdn/shop/products/Returnofthekingvariant_1024x1024@2x.jpg?v=1672565860' },
  { title: 'Pulp Fiction', category: 'Drama, Crime', description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', actors: 'Actor 75, Actor 76', director: 'Director 37', image: 'https://egoamo.co.za/cdn/shop/products/Pulp_Fiction_540x.jpg?v=1573184419' },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', category: 'Drama', description: 'Description 37', actors: 'Actor 75, Actor 76', director: 'Director 37', image: 'https://www.movienewsletters.net/photos/009289H1.jpg' },
  { title: 'The Good, the Bad and the Ugly', category: 'Drama', description: 'Description 37', actors: 'Actor 75, Actor 76', director: 'Director 37', image: 'https://www.doesthedogdie.com/content/200/0/sN4h2uODctPePR8ot611XK3fdbs.jpg' },
  { title: 'Forrest Gump', category: 'Drama', description: 'Description 37', actors: 'Actor 75, Actor 76', director: 'Director 37', image: 'https://egoamo.co.za/cdn/shop/products/ForrestGumpPoster_540x.jpg?v=1614932874' },
  { title: 'Fight Club', category: 'Drama', description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.', actors: 'Actor 75, Actor 76', director: 'Director 37', image: 'https://mrhipster.com/wp/wp-content/uploads/2015/01/fight-club.jpg' },


];

function showHomePage() {
  contentDiv.innerHTML = ''; 

  // ფილმების სია მთავარ გვერდზე
  movieData.forEach((movie, index) => {
    const movieBox = document.createElement('div');
    movieBox.classList.add('movie-box');
    movieBox.setAttribute('data-index', index);
    movieBox.addEventListener('click', () => showMovieDetails(index));

    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = movie.title;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');

    const title = document.createElement('div');
    title.classList.add('movie-title');
    title.textContent = movie.title;

    const category = document.createElement('div');
    category.classList.add('movie-category');
    category.textContent = movie.category;

    movieInfo.appendChild(title);
    movieInfo.appendChild(category);

    movieBox.appendChild(image);
    movieBox.appendChild(movieInfo);

    contentDiv.appendChild(movieBox);
  });
}

function showMovieDetails(index) {
  const selectedMovie = movieData[index];
  document.getElementById('detailsTitle').textContent = selectedMovie.title;
  document.getElementById('detailsCategory').textContent = `Category: ${selectedMovie.category}`;
  document.getElementById('detailsDescription').textContent = `Description: ${selectedMovie.description}`;
  document.getElementById('detailsActors').textContent = `Actors: ${selectedMovie.actors}`;
  document.getElementById('detailsDirector').textContent = `Director: ${selectedMovie.director}`;

  // დეტალების გამოტანა (დახასიათების)
  const movieBox = document.querySelector(`[data-index="${index}"]`);
  const boxRect = movieBox.getBoundingClientRect();
  movieDetails.style.top = `${boxRect.top + window.scrollY}px`;
  movieDetails.style.left = `${boxRect.right + 10}px`; 

  movieDetails.style.display = 'block';
}

function closeMovieDetails() {
  movieDetails.style.display = 'none';
}

function searchMovies() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredMovies = movieData.filter(movie => movie.title.toLowerCase().includes(searchTerm));
  showSearchResults(filteredMovies);
}

function showSearchResults(results) {
  contentDiv.innerHTML = ''; 

  // საძიებოში ფილმების გამოტანა
  results.forEach((movie, index) => {
    const movieBox = document.createElement('div');
    movieBox.classList.add('movie-box');
    movieBox.setAttribute('data-index', index);
    movieBox.addEventListener('click', () => showMovieDetails(index));

    const image = document.createElement('img');
    image.src = movie.image;
    image.alt = movie.title;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');

    const title = document.createElement('div');
    title.classList.add('movie-title');
    title.textContent = movie.title;

    const category = document.createElement('div');
    category.classList.add('movie-category');
    category.textContent = movie.category;

    movieInfo.appendChild(title);
    movieInfo.appendChild(category);

    movieBox.appendChild(image);
    movieBox.appendChild(movieInfo);

    contentDiv.appendChild(movieBox);
  });
}

function validateRegistration() {
  // მეილის დაყენება რეგისტრაციისას(პირობები @ და წერტილზე)
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(emailInput.value)) {
    alert('Invalid email format');
    return false;
  }

  // პაროლის დაყენება (ალერთის გამოტანა)
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const passwordStrength = getPasswordStrength(passwordInput.value);
  if (passwordStrength === 'weak') {
    alert('Password is weak');
    return false;
  } else if (passwordStrength === 'average') {
    alert('Password is average');
  } else {
    alert('Password is strong');
  }

  // ავტომატურად მიუთითებს რეგისტრაციის დღეს
  const currentDate = new Date();
  registrationDateInput.value = currentDate.toISOString().slice(0, 10);



  return true;
}
// პაროლის სიძლიერის დადგენა

function getPasswordStrength(password) {
  if (/^[a-zA-Z]+$/.test(password)) {
    return 'weak';
  } else if (/^[a-zA-Z0-9]+$/.test(password)) {
    return 'average';
  } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) {
    return 'strong';
  } else {
    return 'weak';
  }
}
function showRegistrationPage() {
  document.querySelector('.registration-form').style.display = 'block';
  document.querySelector('#content').style.display = 'none';
  document.querySelector('.movie-details').style.display = 'none';
}

    function showRegistrationPage() {
      document.querySelector('.registration-form').style.display = 'block';
      document.querySelector('.authorization-form').style.display = 'none';
      document.querySelector('#content').style.display = 'none';
      document.querySelector('.movie-details').style.display = 'none';
    }

    function showAuthorizationPage() {
      document.querySelector('.authorization-form').style.display = 'block';
      document.querySelector('.registration-form').style.display = 'none';
      document.querySelector('#content').style.display = 'none';
      document.querySelector('.movie-details').style.display = 'none';
    }

    function validateAuthorization() {

      return true;
    }


    

    function showMovieDetailsOnHover(index) {
      const selectedMovie = movieData[index];
      document.getElementById('detailsTitle').textContent = selectedMovie.title;
      document.getElementById('detailsCategory').textContent = `Category: ${selectedMovie.category}`;
      document.getElementById('detailsDescription').textContent = `Description: ${selectedMovie.description}`;
      document.getElementById('detailsActors').textContent = `Actors: ${selectedMovie.actors}`;
      document.getElementById('detailsDirector').textContent = `Director: ${selectedMovie.director}`;
  
    
      movieDetails.style.top = `${event.clientY + 10}px`; 
      movieDetails.style.left = `${event.clientX + 10}px`; 
  
      movieDetails.style.display = 'block';
    }
  
    function hideMovieDetails() {
      movieDetails.style.display = 'none';
    }


    
    function showContactPage() {
      document.querySelector('.contact-page').style.display = 'block';
      document.querySelector('.registration-form').style.display = 'none';
      document.querySelector('.authorization-form').style.display = 'none';
      document.querySelector('#content').style.display = 'none';
      document.querySelector('.movie-details').style.display = 'none';
    }
  
    function showRegistrationPage() {
      document.querySelector('.registration-form').style.display = 'block';
      document.querySelector('.authorization-form').style.display = 'none';
      document.querySelector('.contact-page').style.display = 'none'; 
      document.querySelector('#content').style.display = 'none';
      document.querySelector('.movie-details').style.display = 'none';
    }
  
    function showAuthorizationPage() {
      document.querySelector('.authorization-form').style.display = 'block';
      document.querySelector('.registration-form').style.display = 'none';
      document.querySelector('.contact-page').style.display = 'none'; 
      document.querySelector('#content').style.display = 'none';
      document.querySelector('.movie-details').style.display = 'none';
    }


    function showHomePage() {
      contentDiv.innerHTML = ''; 


      movieData.forEach((movie, index) => {
        const movieBox = document.createElement('div');
        movieBox.classList.add('movie-box');
        movieBox.setAttribute('data-index', index);
        movieBox.addEventListener('mouseenter', () => showMovieDetailsOnHover(index));
        movieBox.addEventListener('mouseleave', hideMovieDetails);

        const image = document.createElement('img');
        image.src = movie.image;
        image.alt = movie.title;

        const movieInfo = document.createElement('div');
        movieInfo.classList.add('movie-info');

        const title = document.createElement('div');
        title.classList.add('movie-title');
        title.textContent = movie.title;

        const category = document.createElement('div');
        category.classList.add('movie-category');
        category.textContent = movie.category;

        movieInfo.appendChild(title);
        movieInfo.appendChild(category);

        movieBox.appendChild(image);
        movieBox.appendChild(movieInfo);

        contentDiv.appendChild(movieBox);
      });
    }
    function showCategoriesPage() {
      console.log("Categories page"); 
    }
    
    function showCategoriesPage() {
      contentDiv.innerHTML = '';
      document.getElementById('categories-page').style.display = 'block';
    }
  
    function applyFilter() {
      const genre = document.getElementById('genre').value;
      const mediaType = document.getElementById('media-type').value;
  
      // კატეგორიების ფილტრი
      const filteredMovies = movieData.filter(movie => {
        return movie.genre.toLowerCase() === genre.toLowerCase() && movie.type.toLowerCase() === mediaType.toLowerCase();
      });
  
      displayFilteredMovies(filteredMovies);
    }
  
    function displayFilteredMovies(filteredMovies) {
      const filteredMoviesContainer = document.getElementById('filtered-movies-container');
      filteredMoviesContainer.innerHTML = '';
  
      if (filteredMovies.length === 0) {
        filteredMoviesContainer.innerHTML = '<p>No movies found with the selected criteria.</p>';
      } else {
        filteredMovies.forEach(movie => {
          const movieBox = document.createElement('div');
          movieBox.classList.add('movie-box');
          movieBox.setAttribute('data-index', movieData.indexOf(movie));
          movieBox.addEventListener('mouseenter', () => showMovieDetailsOnHover(movieData.indexOf(movie)));
          movieBox.addEventListener('mouseleave', hideMovieDetails);
  
          const image = document.createElement('img');
          image.src = movie.image;
          image.alt = movie.title;
  
          const movieInfo = document.createElement('div');
          movieInfo.classList.add('movie-info');
  
          const title = document.createElement('div');
          title.classList.add('movie-title');
          title.textContent = movie.title;
  
          const category = document.createElement('div');
          category.classList.add('movie-category');
          category.textContent = movie.category;
  
          movieInfo.appendChild(title);
          movieInfo.appendChild(category);
  
          movieBox.appendChild(image);
          movieBox.appendChild(movieInfo);
  
          filteredMoviesContainer.appendChild(movieBox);
        });
      }
    }

    let categoryPageOpened = false;

  function showCategoriesPage() {
    contentDiv.innerHTML = '';
    document.getElementById('categories-page').style.display = 'block';
    categoryPageOpened = true;
  }

  function applyFilter() {
    
  }

  function displayFilteredMovies(filteredMovies) {
   
  }

  // ეს ფიქსავს კატეგორიების თაბს რომელიც არ ითიშება სხვა თაბზე გადასვლისას

  function hideCategoriesPage() {
    if (categoryPageOpened) {
      document.getElementById('categories-page').style.display = 'none';
      categoryPageOpened = false;
    }
  }

  // იგივე ფიქსია
  const menuLinks = document.querySelectorAll('nav a');
  menuLinks.forEach(link => {
    link.addEventListener('click', hideCategoriesPage);
  });

  

// გადასასვლელი თაბები

document.getElementById('categories').addEventListener('click', () => showCategoriesPage());
document.getElementById('contact').addEventListener('click', () => showContactPage());

// მთავარი ფეიჯის ჩატვირთვა
showHomePage();

