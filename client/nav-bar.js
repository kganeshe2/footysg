// Hamburger-Arrow Navigation Bar
Template.navBar.events({
  'click .glyphicon-menu-left': function goBack() {
    history.back();
  },
  'click .glyphicon-menu-hamburger': function showSideNav() {
    Session.set('menuState', 'menu-open');
    Session.set('homeBodyState', 'home-body-pushed');
    console.log('open sesame');
  },
  'click .closebtn': function closeSideNav() {
    Session.set('menuState', 'menu-closed');
    Session.set('homeBodyState', 'home-body-unpushed');
    console.log('close sesame');
  },
});

Template.navBar.helpers({
  menuState: function getMenuState() {
    return Session.get('menuState');
  },
  homeBodyState: function getHomeBodyState() {
    return Session.get('homeBodyState');
  },
});
