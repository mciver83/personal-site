angular.module('andrewResume');
app.service('mainService', function($http){

	this.sendMeAnEmail = function(firstName, lastName, fromEmail, emailSubject, message){
		console.log("sendMeAnEmail", firstName, lastName, fromEmail, emailSubject, message);
		return $http({
			method: "POST",
			url: "https://mandrillapp.com/api/1.0/messages/send.json",
			data: {
				'key': 'K7f6Hj_JxDwqKqYkbiyvcQ',
				'message': {
					'subject': emailSubject,
					'from_email': fromEmail,
					'to': [
						{
							'email': 'andrewcrane152@gmail.com',
							'name': 'AndrewCrane.me',
							'type': 'to'
						}
					],
					'html': firstName + ' ' + lastName + '<p>' + message + '</p>'
				}
			}
		});
	};

});
