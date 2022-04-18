const D = document
export default function toFlip(sections) {
  const $sections = D.querySelectorAll(sections)
  $sections.forEach((section, i) => {
    if (i % 2 === 0) section.classList.add("flip")
  })
}
