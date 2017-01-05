//sample data modified from randomUser.me
var randomUser = {
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "stella",
        "last": "meyer"
      },
      "location": {
        "street": "7385 kapellenweg",
        "city": "schmalkalden-meiningen",
        "state": "saarland",
        "postcode": 58225
      },
      "email": "stella.meyer@example.com",
      "picture": {
        "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
      },
      "nat": "DE"
    }
  ]
}

//ajax and promise
function getRandomUser(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://randomuser.me/api`
    })
    .then(function(data, textStatus, XHR){
      resolve(data)
    })
  })
}

//change randomUser variable to getRandomUser function
randomUser = getRandomUser()

//.then for timing
randomUser.then(function(val){
  randomUser = val;
}).then(loadRandomUser);


//add function loadRandomUser, so it can be called in the Promise at the appropriate time
function loadRandomUser() {
    //handlebars step one: grap the html from the script tag
    var entryHTML = $("#random-user").html();

    //handlebars step two: compile it into a template
    var entryTemplate = Handlebars.compile(entryHTML);

    //handlebars step three:render the HTML by passing the data to the template
    var entryOutput = entryTemplate(randomUser);

    //handlebars step four: put the complete HTML into the DOM
    $("#randomUserOutput").append(entryOutput);
}










