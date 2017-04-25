import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.$nav = $('.header');
    this.$navLogo = $('.header__logo');
    this.$triggerElement = $('.large-hero__heading');
    this.createWaypoint();
  }

  createWaypoint() {
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

  // When nav gets to certain point on window
    // Trigger css class at a spot on the window
    // Change bg to darker color
}

export default StickyHeader;
