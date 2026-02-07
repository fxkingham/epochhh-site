function resizeMasonryItem(item) {
  const grid = document.querySelector(".gallery");
  if (!grid) return;

  const rowHeight = parseInt(getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
  const rowGap = parseInt(getComputedStyle(grid).getPropertyValue("gap"));

  const img = item.querySelector("img");
  if (!img) return;

  const height = img.getBoundingClientRect().height;
  const rowSpan = Math.ceil((height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllMasonryItems() {
  document.querySelectorAll(".gallery .gallery-item").forEach(resizeMasonryItem);
}

window.addEventListener("load", () => {
  resizeAllMasonryItems();
  window.addEventListener("resize", resizeAllMasonryItems);
});
