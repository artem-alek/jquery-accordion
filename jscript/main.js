$('.sectionTitle').click(sectionClick)
var target
function sectionClick (event) {
  target = $(event.currentTarget).siblings(".sectionP")
  $('.sectionP').addClass('close')
  target.removeClass('close').addClass('open')
}
