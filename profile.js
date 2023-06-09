// Add an event listener to the active link item
const activeLink = document.querySelector('.link-item.active');
activeLink.addEventListener('click', handleActiveLink);

function handleActiveLink(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Remove the active class from the current active link
  activeLink.classList.remove('active');

  // Add the active class to the clicked link
  const clickedLink = event.target.closest('.link-item');
  clickedLink.classList.add('active');

  // Update the indicator position
  const indicator = document.querySelector('.indicator');
  const clickedLinkRect = clickedLink.getBoundingClientRect();
  const indicatorOffset = clickedLinkRect.left - clickedLinkRect.width / 2;
  indicator.style.transform = `translateX(${indicatorOffset}px)`;
}
/* JS Splitting */

make a card hiver jsSplitting();

setTimeout(() => {
  document.querySelector(".card").focus();
}, 1500);
