import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ScrollReveal {
  constructor(element,offset) {

    // Properties
    this.$itemsToReveal = $(`.${element}`);
    this.offset = offset;

    // Hide items by default
    this.hideOnPageLoad();

    // Add scroll fade ins
    this.createWaypoints();
  }

  hideOnPageLoad() {
    this.$itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {

    let scrollRevealClass = this;

    this.$itemsToReveal.map(function() {
      const currentItem = this;
      new Waypoint({
        element: currentItem,
        offset: scrollRevealClass.offset,
        handler: function() {
          $(currentItem).addClass('reveal-item--is-visible');
        }
      });
    });

  }

}

export default ScrollReveal;
