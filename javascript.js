document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu');
    const navigation = document.querySelector('.navigation');
  
    menuIcon.addEventListener('click', function () {
      navigation.classList.toggle('show');
      background.style.display = (background.style.display === 'block') ? 'none' : 'block';
    });
  
    background.addEventListener('click', function () {
      navigation.classList.remove('show');
      background.style.display = 'none';
    });
  });
  