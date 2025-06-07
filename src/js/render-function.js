// export const createArtistsCartTemplate = ({ id, title, body }) => {
//   return `
// <li class="posts-list-item">
//   <button class="post-delete-btn" type="button" data-delete data-post-id='${id}' >
//     <svg class="post-delete-icon" width="16" height="16">
//       <use href="/js-practice-PostsRequest/icons.svg#icon-trash"></use>
//       </svg>
//    </button>
//    <h3 class="posts-list-item-title">${title}</h3>
//   <p class="posts-list-item-text">${body}</p>
// </li>
//   `;
// };

// <li class="artist-card">
//   <img src="URL_artists_photo" alt="artists name" class="artist-photo" />
//    <ul class="artist-genres">
//     <li class="genre-tag">Жанр 1</li>
//     <li class="genre-tag">Жанр 2</li>
//     <li class="genre-tag">Жанр 3</li>
//     <li class="genre-tag">Жанр 4</li>
//    </ul>
//   <h3 class="artist-name">Ім'я виконавця</h3>
//   <p class="artist-info">Коротка інформація про виконавця...</p>
//  <button class="learn-more-btn" data-artist-id="ID_виконавця">Learn More</button>
// </li>

// async function fetchAndRenderArtists(url) {
//   try {
//     const response = await axios.get(url);
//     const artists = response.data;

//     const container = document.getElementById('cards-container');
//     container.innerHTML = ''; // Очистити перед рендером

//     artists.forEach(artist => {
//       const card = document.createElement('div');
//       card.className = 'artist-card';

//       card.innerHTML = `
//         <img src="${artist.photo}" alt="${artist.name}" class="artist-photo" />
//         <div class="artist-genres">
//           ${artist.genres
//             .map(genre => `<span class="genre-tag">${genre}</span>`)
//             .join('')}
//         </div>
//         <h3 class="artist-name">${artist.name}</h3>
//         <p class="artist-info">${artist.shortInfo}</p>
//         <button class="learn-more-btn" data-artist-id="${
//           artist.id
//         }">Learn More</button>
//       `;

//       container.appendChild(card);
//     });
//   } catch (error) {
//     console.error('Error fetching artists:', error);
//   }
// }
