let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];
function init() {
  getFromLocalStorage();

  renderBooks();
}
function renderBooks() {
  let contentRef = document.getElementById("main_container");
  contentRef.innerHTML = "";
  for (let indexBook = 0; indexBook < books.length; indexBook++) {
    contentRef.innerHTML += getBookTemplate(indexBook);
    renderComments(indexBook);
  }
}

function getBookTemplate(indexBook) {
  return `
    <div class="book_box">
       <h2>${books[indexBook].name}</h2> 
        <hr>
            <div class="book_imgsection">
                <img src="./img/open-book.png" class="open_book">
            </div>
            <hr>
            <div class="book_description">
              <div class="book_price_like">
               <h2>${formatPrice(books[indexBook].price)}</h2>
                    <div class="like_heart" onclick="toggleLike(${indexBook})">
                     <span>${books[indexBook].likes}</span>
                 <img class="heart_img" src="./img/${
                   books[indexBook].liked ? "heart.png" : "dislike.png"
                 }">
                    </div>
                </div>
                 <table>
    <tbody>
     <tr>
      <td>Author:</td>
      <td>${books[indexBook].author}</td>
     </tr>
       <tr>
      <td>Erscheinungsjahr:</td>
      <td>${books[indexBook].publishedYear}</td>
     </tr>
       <tr>
      <td>Genre:</td>
      <td>${books[indexBook].genre}</td>
     </tr>
    </tbody>
    </table>  
          
     </div>
     <hr>
     <div class="book_comment_container">
        <h3>Kommentare:</h3>
    <div id="book_comment_${indexBook}" class="book_comment">
      
        </div>
            <div class="send_comment">
                <input type="text" class="input_field" placeholder="Kommentar..." id="comment_input_${indexBook}">
                <img onclick="addComment(${indexBook})" class="comment_btn" src="./img/paper-plane_9449259.png" alt="senden">
            </div>
        </div>
   
   
    </div>`;
}
function renderComments(indexBook) {
  let book = books[indexBook];
  let commentRef = document.getElementById(`book_comment_${indexBook}`);
  commentRef.innerHTML = "";

  if (book.comments.length === 0) {
    commentRef.innerHTML = `<i>Keine Kommentare vorhanden</i>`;
    return;
  }

  for (let i = 0; i < book.comments.length; i++) {
    commentRef.innerHTML += `
        <div class="comment_box">
        <table>
        <tbody>
          <td class="user">${book.comments[i].name}:</td> <td> ${book.comments[i].comment}</td>
         </tbody>         
          </table>
        </div>
      `;
  }
}
function addComment(indexBook) {
  let commentInputRef = document.getElementById(`comment_input_${indexBook}`);

  let commentInput = commentInputRef.value.trim();

  if (commentInput == "") return;

  books[indexBook].comments.push({
    name: "Gast",
    comment: commentInput,
  });

  commentInputRef.value = ""; // очищаем поле инпут
  renderComments(indexBook);
  saveToLocalStorage(); // сохраняет коментарии !
}
init();
function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}
function toggleLike(indexBook) {
  let book = books[indexBook];

  // если уже лайкнуто → убираем лайк
  if (book.liked) {
    book.likes--;
    book.liked = false;
  } else {
    // если не лайкнуто → ставим лайк
    book.likes++;
    book.liked = true;
  }

  // обновляем отрисовку книги
  renderBooks();
  saveToLocalStorage(); // сохраняет лайки число будет отображаться!
}
//функция сохраняет локально и с помощью джейсон стрингифай переделывает в текст!
function saveToLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}
// эта функция считывает с локал сторэйдж гет итем и джейсон пэрс опять возвращает данные в исодный вид тоесть массив!
function getFromLocalStorage() {
  let storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
}
// смотри в инит там прописана функция гетфром локал сторедж при загрузке страницы это для считывания уже сохраненых данных!
