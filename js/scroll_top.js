const D = document,
  W = window

export default function scrollTop(input) {
  const $input = D.querySelector(input)

  W.onscroll = e => {
    W.pageYOffset > 400
      ? $input.classList.remove("hidden")
      : $input.classList.add("hidden")
  }

  D.onclick = e => {
    if (e.target.matches(input) || e.target.matches(`${input} *`)) {
      W.history.pushState("", document.title, window.location.pathname)
      W.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
}
