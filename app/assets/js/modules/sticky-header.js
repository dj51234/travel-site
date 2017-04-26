import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.$lazyImages = $('.lazyload');
    this.$nav = $('.header');
    this.$navLogo = $('.header__logo');
    this.$triggerElement = $('.large-hero__heading');
    this.$pageSections = $('.section');
    this.$navLinks = $('.primary-nav a');
    this.createHeaderWaypoint();
    this.createSectionWaypoints();
    this.addSmoothScroll();
  }

  createSectionWaypoints() {

    const that = this;

    this.$pageSections.map(function() {
      const currentSection = this;

      new Waypoint({
        element: currentSection,
        handler(direction) {
          if (direction === 'down') {
            const currentLink = currentSection.getAttribute('data-header-link');
            that.$navLinks.removeClass('is-current-section');
            $(currentLink).addClass('is-current-section');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: currentSection,
        handler(direction) {
          if (direction === 'up') {
            const currentLink = currentSection.getAttribute('data-header-link');
            that.$navLinks.removeClass('is-current-section');
            $(currentLink).addClass('is-current-section');
          }
        },
        offset: '-40%'
      });
    });

  }

  createHeaderWaypoint() {

    const that = this;

    new Waypoint({
      element: that.$triggerElement[0],
      handler: function(direction) {
        direction === 'down' ? (
          that.$nav.addClass('header--is-scrolling'),
          that.$navLogo.addClass('header__logo--is-scrolling')
        ) : (
          that.$nav.removeClass('header--is-scrolling'),
          that.$navLogo.removeClass('header__logo--is-scrolling')
        )
      }
    });

  }

  addSmoothScroll() {
    this.$navLinks.smoothScroll();
  }
}

export default StickyHeader;
