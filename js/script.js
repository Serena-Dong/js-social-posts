/*
# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
Non è necessario creare date casuali, inventatele*
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)
*/

const data = [
    
    { id: 1,
    name: 'Rachael Zane', 
    profilePic: 'https://api.lorem.space/image/fashion?w=150&h=150', 
    date: '12-22-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/furniture?w=150&h=150', 
    likes: 56,
    },
    { id: 2,
    name: 'Jessica Day', 
    profilePic: 'https://api.lorem.space/image/fashion?w=150&h=150', 
    date: '12-20-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/furniture?w=150&h=150', 
    likes: 23,
    },
    { id: 3,
    name: 'Nick Miller', 
    profilePic: '', 
    date: '12-15-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: '', 
    likes: 64,
    },
    { id: 4,
    name: 'Mike Ross', 
    profilePic: 'https://api.lorem.space/image/fashion?w=150&h=150', 
    date: '12-07-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/furniture?w=150&h=150', 
    likes: 87,
    },
    { id: 5,
    name: 'Winston Bishop', 
    profilePic: 'https://api.lorem.space/image/fashion?w=150&h=150', 
    date: '10-04-2022', 
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.', 
    image: 'https://api.lorem.space/image/furniture?w=150&h=150', 
    likes: 34,
    },
]
