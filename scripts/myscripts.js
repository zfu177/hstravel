function checkUrl() {
  const currentUrl = window.location.href;
  setActive(currentUrl);
}

function setActive(href) {
  const splittedHref = href.split('/');
  const hrefLastPart = splittedHref[splittedHref.length - 1];

  const listItems = ['Deals', 'Destinations', 'Description', 'Founders', 'Contact'];
  listItems.forEach((item) => {
    if (hrefLastPart.includes(item)) {
      // Remove active class
      const activeSublinkItems = document.getElementsByClassName('active');
      if (activeSublinkItems.length > 0) {
        activeSublinkItems[0].classList.remove('active');
      }
      document.getElementById(`${item}Li`).className = 'active';
    }
  });
}

document.addEventListener(`click`, (e) => {
  const origin = e.target.closest(`a`);
  if (origin) {
    setActive(origin.href);
  }
});
