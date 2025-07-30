function toggleClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.toggle(class_name);
}

function addClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.add(class_name);
}

function removeClass(class_name, id) {
  var element = document.getElementById(id);
  if (element) element.classList.remove(class_name);
}

function removeClassFromMultipleIds(class_name, ...ids) {
  for (let id of ids) {
    let element = document.getElementById(id);
    if (element) element.classList.remove(class_name);
  }
}
