import $ from 'jquery';

class Modal {
  constructor() {
    this.$modalBtns = $('.open-modal');
    this.$modal = $('.modal');
    this.$closeBtn = $('.modal__close');
    this.$document = $(document);
    this.events();
  }
  events() {
    // Clicking modal btn
    this.$modalBtns.on('click',this.openModal.bind(this));
    // Clicking close btn
    this.$closeBtn.on('click',this.closeModal.bind(this));
    // Pushing of escape key
    this.$document.on('keyup',this.escKeyHandler.bind(this));
  }

  escKeyHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.$modal.addClass('modal--is-open');
    return false;
  }

  closeModal() {
    this.$modal.removeClass('modal--is-open');
  }
}

export default Modal;
