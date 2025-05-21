document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("month-filter");
  if (!select) return;

  select.addEventListener("change", () => {
    const month = select.value; 
    console.log(month)            // the newly selected value
    location.href = `/runningclub?month=${month}`;
  });
});
