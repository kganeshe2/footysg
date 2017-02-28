import './login.html';

Template.login.events({
    'click #log-in'(event) {
        
        Meteor.loginWithFacebook({requestPermissions: ['public_profile', 'email']}, function(err){
            if (err) {
                console.log('Handle errors here: ', err);
            }else{
            Router.go('/home') //or whatever Template you wanna go
              }
        });
    },
    'click #continue-as-guest'(event){
        if (!Meteor.user()){
            Meteor.logout();
        }
    }
});

Template.login.helpers({
    getEmail() {
        return Meteor.user().emails && Meteor.user().emails[0].address;
    }
});