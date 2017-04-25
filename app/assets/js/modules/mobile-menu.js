import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.$header = $('.header');
    this.$menuIcon = $('.header__menu-icon');
    this.$menuContent = $('.header__menu-content');
    this.events();
  }

  events() {
    this.$menuIcon.on('click',this.toggle.bind(this));
  }

  toggle() {
    this.$menuContent.toggleClass('header__menu-content--is-visible');
    this.$menuIcon.toggleClass('header__menu-icon--toggle-x');
    this.$header.toggleClass('header--is-expanded');
  }
}

export default MobileMenu;
