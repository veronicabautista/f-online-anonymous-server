'use strict';

var openMenu = document.querySelector('.nav-trigger');
var closeMenu = document.querySelector('.nav-close');
var navMenu = document.querySelector('.nav');

navMenu.classList.add('hidden');
navMenu.classList.remove('nav');

function openNavMenu() {
  navMenu.classList.remove('hidden','nav-animation-close');
  navMenu.classList.add('nav','nav-animation-open');
  openMenu.classList.add('hidden');
}

function closeNavMenu() {
  navMenu.classList.add('hidden','nav-animation-close');
  navMenu.classList.remove('nav','nav-animation-open');
  openMenu.classList.remove('hidden');
}

openMenu.addEventListener('click', openNavMenu);
closeMenu.addEventListener('click', closeNavMenu);