$(document).ready(() =>{
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle(700)
  })
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-answer-one').fadeOut('fast')
    $('.frown').show()
  })
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-answer-two').fadeOut('fast')
    $('.frown').show()
  })
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-answer-three').fadeOut('fast')
    $('.frown').show()
  })
  $('.correct-answer').on('click', () => {
    $('.wrong-answer-one').fadeOut('fast')
    $('.wrong-answer-two').fadeOut('fast')
    $('.wrong-answer-three').fadeOut('fast')
    $('.frown').hide()
    $('.smiley').show()
  })
});
