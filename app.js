const $h1 = document.querySelector('h1')
$h1.textContent = "HACKED!"

const $anchors = document.querySelectorAll('a')
$anchors.forEach(anchor => {
  anchor.href = "https://thebadguys.com"
})

const $image = document.createElement('img')
$image.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"
document.body.prepend($image)

const $mainChildrenPs = document.querySelectorAll('main > p')
$mainChildrenPs.forEach($p => {
  console.log($p)
  $p.remove()
})

const $countSpan = document.querySelector('span')
$countSpan.textContent = "0"

const $compromised = document.createElement('p')
$compromised.textContent = "Your account has been compromised."
document.body.append($compromised)