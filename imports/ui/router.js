Router.route('/',{
	template:'login',
});
Router.route('/home');

Router.route('/pitch-list',{
	template:'pitchList',
});
Router.route('/pitch-info',{
	template: 'pitchInfo',
});
Router.configure({
  layoutTemplate: 'appBody',
});