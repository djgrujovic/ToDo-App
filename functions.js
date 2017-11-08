// DUGME ZA OTVARANJE I ZATVARANJE MENIJA
//Klikom na odredjeni element pokrece funkciju (click)
$("#btn").click(function(){
  //Nakon klika na odredjeni element se dodaje/oduzima klasa "active"
  $(this).toggleClass('active');
  //U koliko ima vec "active" klasu, meni treba da se pojavi!
  if ($(this).hasClass('active')){
    //Meni - slajd na dole
    $("#menu").slideDown(200);
    //
  } else {
    //Meni - slajd na gore (zatvara se)
    $("#menu").slideUp();
  }
});


// HOW TO CHANGE TEXT in DIV
$(document).ready(function() {
// Link i Sections su nizovi koji uzimaju sve elemente sa datim klasama
var links = $('.hover');
var sections = $('.text');
//
links.each(function(index, link) {
  // Svaki link kad se klikne prodje kroz svaki element koji je u nizu "section"
  $(link).click(function () {
    sections.each(function(sectionIndex, section) {
      $(section).addClass('remove');
    });
      $(sections[index]).removeClass('remove');
    });
  });
});


// On click active the TAB
$(function(){
  $('.hover').click(function(){
    $('.hover').removeClass('active');
    $(this).addClass('active');
  });
});


// jQuery Pratctice

//Klikom na element - HIDE
// $(function(){ //Proglasavanje funkcije
//   $('.name').click(function(){ //Klikom na odredjeni element aktivira se funkcija...
//     $(this).hide(); //da se element koji je kliknut 'skloni'
//   });
// });

//U zavisnosti od klika na 'hide' ili 'show', element poprima funkciju
// $(function(){
//   $('#hide').click(function(){
//     $('.name').hide(500);
//   });
// });
// $(function(){
//   $('#show').click(function(){
//     $('.name').show(500);
//   });
// });

//Najjednostavnija verzija za MENU
  $('#show').click(function(){
    $('.menu').slideToggle(500);
  });

  //jQuery Animation - doesn`t work properly
  // $("#show").click(function(){
  //     $(".menu").animate({
  //         left: '250px',
  //         opacity: '0.5',
  //         height: '150px',
  //         width: '150px'
  //     });
  // });
