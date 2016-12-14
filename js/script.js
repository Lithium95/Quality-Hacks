// Initialize Firebase
var app = angular.module("DevOPS", ["ui.router","firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'QuestionsCTRL'        
  })
  .state('score', {
      url: '/score',
      templateUrl: 'views/score.html',
      controller: 'ScoreCTRL'
    });
  
});

app.config(function() {
  var config = {
    apiKey: "AIzaSyCXPiRRpPk69CdV65ERzLezVdyWOsyUJZk",
    authDomain: "qhacks-ddb82.firebaseapp.com",
    databaseURL: "https://qhacks-ddb82.firebaseio.com",
    storageBucket: "qhacks-ddb82.appspot.com",
    messagingSenderId: "322105158192"
  };  
  firebase.initializeApp(config);
});




app.controller('QuestionsCTRL', function($scope, $firebaseObject,$rootScope){
      $rootScope.DevScore = 4; 
});


app.controller('ScoreCTRL', function($scope, $firebaseObject,$rootScope){
      var score = $rootScope.DevScore;
      var score = 4;

       if (score > 1 && score < 5) {
            $('.score').css('background-color', '#CD2525');
       }
});











$(document).ready(function(){
      var $slides = $('.home');
      var colors = ['#1E7F00','#FF5F00', '#440058'];
      var count = colors.length;
      var slideshow = function() {
            console.log('lol');
            $slides
                  .css('background-color', colors[Math.floor(Math.random() * count)])
                  // .css('background','linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("' + images[Math.floor(Math.random() * count)] + '")')
                  .show(0, function() {
                        console.log('Change');
                        setTimeout(slideshow, 2500);
                  });
      };
      slideshow();
});