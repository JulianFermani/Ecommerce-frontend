 // CARROUSEL

 window.addEventListener('load', function (){
   new Glider(document.querySelector('.carrousel__list'), {
     slidesToScroll: 1,
     slidesToShow: 5.5,
     draggable: true,
     dots: '.carrousel__indicator',
     arrows: {
       prev: '.carrousel__last',
       next: '.carrousel__next'
     }
   });
});
