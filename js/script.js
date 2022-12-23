//DATI
const data = [
    
    { id: 1,
    name: 'Rachael Zane', 
    profilePic: 'https://api.lorem.space/image/fashion?w=1000&h=1000', 
    date: '12-22-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/pizza?w=1000&h=500', 
    likes: 56,
    },
    { id: 2,
    name: 'Jessica Day', 
    profilePic: 'https://api.lorem.space/image?w=1000&h=1000', 
    date: '12-20-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: '', 
    likes: 23,
    },
    { id: 3,
    name: 'Nick Miller', 
    profilePic: '', 
    date: '12-15-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/furniture?w=1000&h=500', 
    likes: 64,
    },
    { id: 4,
    name: 'Mike Ross', 
    profilePic: 'https://api.lorem.space/image/watch?w=1000&h=1000&hash=7F5AE56A', 
    date: '12-07-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/car?w=1000&h=500', 
    likes: 87,
    },
    { id: 5,
    name: 'Winston Bishop', 
    profilePic: 'https://api.lorem.space/image/fashion?w=1000&h=1000&hash=9D9539E7', 
    date: '10-04-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/house?w=1000&h=500', 
    likes: 34,
    },
]

//ELEMENTO PRINCIPALE

const postList = document.querySelector('.posts-list');

//Creo gli elementi
let post = '';

for (let i = 0; i < data.length; i++){
    post += `
    <div class="post">
        <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon">
              <img class="profile-pic" src="${data[i].profilePic}" alt="Phil Mangione" />
            </div>
            <div class="post-meta__data">
              <div class="post-meta__author">${data[i].name}</div>
              <div class="post-meta__time">${data[i].date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">
        ${data[i].text}
        </div>
        <div class="post__image">
          <img src="${data[i].image}" alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" id="${data[i].id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-${data[i].id}" class="js-likes-counter">${data[i].likes}</b> persone</div>
          </div>
        </div>
      </div>
    `
}
//Inserisco in pagina
postList.innerHTML= post;

//Prendo il bottone e il numero dei likes
for (let i = 1; i <= data.length; i++){
    
    const button = document.getElementById([i]);
    let likeCounter = document.getElementById('like-counter-'[i]);
    
    //Aggiungo la classe quando il butone viene colorato
    button.addEventListener('click', function(){
        button.classList.toggle('like-button--liked')

    })    
    
}