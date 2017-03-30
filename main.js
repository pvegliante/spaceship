var guy = $('#guy');
console.log(guy);
var craft = $('#craft');
console.log(craft);

const c = document.getElementById('canvas');
const ctx = c.getContext('2d');
const environment = new Environment(c, ctx);
const globe = new Globe(ctx, window.innerWidth/2 - 170, window.innerHeight/2 - 170);
window.onload = function() {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    // const iss = new Iss(ctx, 350, 350);

function getData() {
    $.ajax({
        url: 'http://api.open-notify.org/astros.json',
        method: 'GET',
        success: function(res) {
          console.log(res);
          spacePeep(res.people);
        }
    })
}
outter();
getData();
function spacePeep(people){
  for(var i = 0; i < people.length; i++){
    var name = '<p class="' + 'name' + i + '">' + people[i].name + '</p>';
    var craft = '<p class="' + 'craft' + i + '">' + people[i].craft + '</p>';
    $('#people').append(name);
    $('#people').append(craft);
  }
};
function outter() {

      // iss.render();
}
}
