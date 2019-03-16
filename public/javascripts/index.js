function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myDigitalClock").innerText = time;
    document.getElementById("myDigitalClock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
showTime();

// select all DOM elements with classname point
const points = document.querySelectorAll('.point');
// get # of elements in the list
const points_length = points.length

// iteration through each elements

var navigation_index = {
    1: 'localhost:3000/about',
    2: 'localhost:3000/cello',
    3: 'localhost:3000/jack',
    4: 'localhost:3000/skills',
    5: 'localhost:3000/contact'
}
points.forEach(point => point.addEventListener('click', function(e){
// get the index number of element (e.g. out of 4 elements // if the selected ('clikced') element is 1st, 2nd, 3rd ??) 
// array index starts from 0 ... so + 1
const getIndex = [].indexOf.call(points, point) + 1

console.log(navigation_index[getIndex]);
// e.preventDefault();

// window.open(navigation_index[getIndex],"_blank");

// NESTED FUNCTION
// pass 4 arguments
// points_length == line 4
// getIndex == line 10
// points  == line 2
processiveBar(e, points_length, getIndex, points);
}));

// FUNCTION LOGIC
function processiveBar(e, points_length, getIndex, points){

const bar_fill = document.querySelector('.bar__fill');
// filling out progress bar logic
TweenMax.to(bar_fill, 1, {
    width: (getIndex - 1) / (points_length - 1) * 100 + '%'
});
// update point--complete and point--active
// TAKING CARE OF step by step SELECTION
if(getIndex => getCompleteIndex){
    
    points.forEach(point => {
        
        if(point.classList.contains('point--active')){
            point.classList.add('point--complete');
            point.classList.remove('point--active');   
        }
    })
    e.target.classList.add('point--active');
}
// e.target.classList.add('point--active');

// update point--complete and point--active
// TAKING CARE OF step skipping SELECTION (for exampe) a user clicks 3rd element while we are currently at 1st element)

// get Elements before current selected elements
function getPreviousSiblings(el) {
    var siblings = [];
    
    while (el = el.previousSibling){
        if(el.tagName == "DIV")
            siblings.push(el);
    }
    // console.log(siblings);
    siblings.forEach(sibling => {
        if(sibling.classList.contains('point')){
            sibling.classList.add('point--complete');
        }
    })
}
// get Elements after current selected elements
function getNextSiblings(el) {
    var siblings = [];
    
    while (el = el.nextSibling){
        if(el.tagName == "DIV")
            siblings.push(el);
    }
    siblings.forEach(sibling => {
        if(sibling.classList.contains('point')){
            sibling.classList.remove('point--complete');
        }
    })
}    

getPreviousSiblings(e.target);
getNextSiblings(e.target);
}


