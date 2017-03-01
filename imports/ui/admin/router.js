import '/imports/ui/admin/admin.js'


Router.route('/admin', function() {
	this.layout('adminNavBar', {
		data:{
		}
	});
	this.render('adminOverview',{
		data: function() {
	  }
	});
});

Router.route('/admin/bookings', function() {
	this.layout('adminNavBar', {
		data:{
		}
	});
	this.render('adminBookings',{
		data: function() {
	  }
	});
});

Router.route('/admin/crm', function() {
	this.layout('adminNavBar', {
		data:{
		}
	});
	this.render('adminCRM',{
		data: function() {
	  }
	});
});

Router.route('/admin/campaign', function() {
	this.layout('adminNavBar', {
		data:{
		}
	});
	this.render('adminCampaign',{
		data: function() {
	  }
	});
});

Router.route('/admin/reports', function() {
	this.layout('adminNavBar', {
		data:{
		}
	});
	this.render('adminReports',{
		data: function() {
	  }
	});
});


Router.route('/promosite',{
	template:'promosite',
});



