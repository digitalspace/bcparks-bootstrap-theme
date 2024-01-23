import * as bootstrap from 'bootstrap';
window.Modal = bootstrap.Modal;

window.addEventListener('DOMContentLoaded', function () {
  initialize();
}, false);

function initialize() {
  const tipElements = document.querySelectorAll('[data-toggle="tooltip"]');
  tipElements.forEach(tooltipEl => {
    const tooltip = new bootstrap.Tooltip(tooltipEl);
    tooltip.enable();
    return tooltip;
  });
}
