function removeEng() {
  $("[lang='en'][data-testid='tweetText']").parentsUntil("article").css('display', 'none');
  
}

window.addEventListener('scroll', removeEng);


window.addEventListener('click', function () {
  for (let delay = 0; delay <= 1000; delay+= 250) {
    setTimeout(removeEng, delay);
  }
});

for (let delay = 500; delay <= 10000; delay+= 500) {
  setTimeout(removeEng, delay);
}