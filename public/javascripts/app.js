$(document).ready(() => {
  const $item = $('.js-item')[0];
  $(document).on('change', '.js-categoryChoice', function() {
    var $el = $(this);
    var category = $el.val();
    var $parent = $el.closest('.js-item');

    $parent.find('.js-singleChoice').toggleClass('hidden', !(category === 'singleChoice'));
    $parent.find('.js-multiChoice').toggleClass('hidden', !(category === 'multiChoice'));
  });

  $('.js-add').on('click', function(){
    $('.js-listItem').append($item.outerHTML);
  });

  $(document).on('click', '.js-remove', function(){
    var $parent = $(this).closest('.js-item');
    var countItem = $('js-item').length;
    if(countItem > 1) {
      $parent.remove();
    }
    
  });
})

var reIndex = function reIndex(start) {
  
}