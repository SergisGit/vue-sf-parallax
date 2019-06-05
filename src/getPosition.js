export default function getPosition (el) {
  var box = el.getBoundingClientRect()
  return {y: box.top, x: box.left}
}
