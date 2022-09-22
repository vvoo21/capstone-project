const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menuOverlay = document.querySelector('.overlay-wrap');
const closeMobileMenu = document.querySelector('.cancel-wrap');
const itemMobileMenu = document.querySelectorAll('.item-menu');

mobileMenuBtn.addEventListener('click', () => {
  menuOverlay.style.display = 'block';
});

closeMobileMenu.addEventListener('click', () => {
  menuOverlay.style.display = 'none';
});

itemMobileMenu.forEach((element) => {
  element.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
  });
});

// featured activities section

const activities = document.querySelector('.featured-activities');
const activitiesArray = [
  {
    id: '1',
    image: 'images/speaker_01.png',
    tittle: 'Remembering the Children: National Day for Truth & Reconciliation',
    place: 'ew Iceland Heritage Museum & Independent Artists',
    city: 'Gimli, MB',
  },

  {
    id: '2',
    image: 'images/speaker_02.png',
    tittle: "Nuit Blanche Kids Zone at The Children's Museum",
    place: "Manitoba Children's Museum",
    city: 'Winnipeg, MB',
  },

  {
    id: '3',
    image: 'images/speaker_03.png',
    tittle: 'WSO Community Celebration Concert',
    place: 'Centennial Concert Hall',
    city: 'Winnipeg, MB',
  },

  {
    id: '4',
    image: 'images/speaker_04.png',
    tittle: 'Nuit Blanche @ WAG',
    place: 'WAG-Qaumajuq',
    city: 'Winnipeg, MB',
  },

  {
    id: '5',
    image: 'images/speaker_05.png',
    tittle: 'Kidz Culture',
    place: 'Creekside Park',
    city: 'Flin Flon, MB',
  },

  {
    id: '6',
    image: 'images/speaker_06.png',
    tittle: 'Glen Williams Open Studios - Pauline Gladstone',
    place: 'Williams Mill Creative Art Studios',
    city: 'Halton Hills, ON',
  },
];

const createActivities = () => {
  const featuredTittle = document.createElement('h2');
  featuredTittle.classList.add('secondary-tittle', 'featured-tittle');
  featuredTittle.innerText = 'Featured Activities';
  activities.appendChild(featuredTittle);

  const barIcon = document.createElement('div');
  barIcon.classList.add('bar-icon');
  activities.appendChild(barIcon);

  const activityContainer = document.createElement('div');
  activityContainer.classList.add('activities-wrap');
  activities.appendChild(activityContainer);

  activitiesArray.forEach((item) => {
    const event = document.createElement('div');
    event.classList.add('event');
    activityContainer.appendChild(event);

    const img = document.createElement('img');
    img.classList.add('event-img');
    img.setAttribute('src', item.image);
    img.setAttribute('alt', 'National Day for Truth & Reconciliation');
    img.setAttribute('width', '178');
    img.setAttribute('height', '178');
    event.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info-activities');
    event.appendChild(info);

    const tittle = document.createElement('h3');
    tittle.classList.add('program-tittle', 'name-event');
    tittle.innerText = item.tittle;
    info.appendChild(tittle);

    const place = document.createElement('h4');
    place.classList.add('place-event');
    place.innerText = item.place;
    info.appendChild(place);

    const grayBar = document.createElement('div');
    grayBar.classList.add('bar-icon-gray');
    info.appendChild(grayBar);

    const city = document.createElement('p');
    city.classList.add('city-event');
    city.innerText = item.city;
    info.appendChild(city);
  });

  const seeMore = document.createElement('div');
  seeMore.classList.add('see-more-wrap');
  activities.appendChild(seeMore);

  const seeMoreText = document.createElement('p');
  seeMoreText.classList.add('see-more-text');
  seeMoreText.innerText = 'MORE';
  seeMore.appendChild(seeMoreText);

  const arrowBtn = document.createElement('a');
  arrowBtn.classList.add('arrow-btn');
  seeMore.appendChild(arrowBtn);

  const arrowImg = document.createElement('img');
  arrowImg.classList.add('arrow-img');
  arrowImg.setAttribute('src', 'images/arrow_down.png');
  arrowImg.setAttribute('alt', 'arrow icon');
  arrowImg.setAttribute('width', '15');
  arrowImg.setAttribute('height', '10');
  arrowBtn.appendChild(arrowImg);
  
};

createActivities();


