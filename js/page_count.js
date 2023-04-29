var counterContainer = document.querySelector(".visit_count");
var visitCount = localStorage.getItem("page_view");
const visited = []
// Check if page_view entry is present
if (visitCount) {
  visitCount = 0;
  localStorage.setItem("page_view", 1);
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
