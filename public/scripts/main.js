// import mobileCollapse from 'scripts/partials/mobileCollapseNav';
const mobileCollapse = () => {
  $(".button-collapse").sideNav();
};

$(document).ready(() => {
    mobileCollapse();
});