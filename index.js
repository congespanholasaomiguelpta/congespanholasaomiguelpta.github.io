var $paragraph = document.querySelector('p')

$paragraph.textContent = 'Conteúdo inserido via javascript'

function newEl(tag, content) {
  var $el = document.createElement(tag);
  $el.innerHTML = content;
  return $el;
}

