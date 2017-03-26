import './registration-form.html';


Template.registrationForm.events({
    'submit form': function(event) {
        event.preventDefault();
        var username = event.target.registerUsername.value;
        var phoneNumber = event.target.registerPhoneNumber.value;
        console.log(username);
        Meteor.users.update(Meteor.userId(),{$set:{'profile.username':username,'profile.phoneNumber':phoneNumber}})
     	Router.go('/home');
     }
});