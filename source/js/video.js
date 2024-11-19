// const videoWrappers = document.querySelectorAll('.about__video-wrapper');

// videoWrappers.forEach((wrapper) => {
//   const playButton = wrapper.querySelector('.about__play-button');
//   const videoFrame = wrapper.querySelector('.about__iframe');
//   const thumbnail = wrapper.querySelector('.about__video-screen');

//   // Добавляем событие клика на кнопку
//   playButton.addEventListener('click', () => {
//     // Скрываем кнопку и заставку
//     playButton.style.display = 'none';
//     thumbnail.style.display = 'none';

//     // Показываем видео и запускаем его
//     videoFrame.style.display = 'block';

//     // Используем YouTube API для автоматического воспроизведения
//     const player = new YT.Player(videoFrame, {
//       events: {
//         onReady: (event) => event.target.playVideo(),
//       },
//     });
//   });
// });

// // Загружаем YouTube IFrame API
// const tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/iframe_api';
// const firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
