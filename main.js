var guy = $('#guy');
console.log(guy);
var craft = $('#craft');
console.log(craft);

function getData() {
    $.ajax({
        url: 'http://api.open-notify.org/astros.json',
        method: 'GET',
        success: function(res) {
          console.log(res);
          craft.html(res.people[0].craft);
          guy.html(res.people[1].name);
        }
    })
}
getData();

  // function spacePeep(people){
  //   for(var = i; i < people.length; i++){
  //
  //   }
  // };
