"use strict";

console.log('hello world'); // fixed menu on scroll
// todo: fix case where user is lower than waypoint on page and refreshes

var waypoint = new Waypoint({
  element: $('.hero-foot'),
  handler: function handler() {
    console.log('Fixed menu waypoint triggered');
    $('.hero-foot').toggleClass('fixed');
  }
});