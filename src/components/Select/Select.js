import $ from 'jquery';
import 'select2';

const Select = {
  settings: {
    target: '.select',
    select: '.select__select',
  },
  init(args) {
    this.settings = $.extend(true, this.settings, args);
    if ($(this.settings.target).length > 0) {
      this.catchDOM(this.settings);
      this.addSelect();
    }
  },
  catchDOM(settings) {
    const target = $(settings.target);
    this.$target = {
      root: target,
      select: target.find(settings.select),
    };
  },
  addSelect() {
    $('.select__select#first').select2({
      width: "80%",
      placeholder: "Wybierz miasto",
    });
    $('.select__select#second').select2({
      width: "80%"
    });
    $('.select__select#disabled').select2({
      width: "80%",
      disabled: true,
    });
    $('.select__select#multi').select2({
      width: "80%",
      multiple: true,
    });
  },

};
export default Select;