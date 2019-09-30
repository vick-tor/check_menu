



function block(){
    var menu = document.querySelector('.menu');
    var block = document.querySelector('.block');
    block.classList.toggle("block-big");
    menu.classList.toggle("red");
}



document.querySelector('.block').onclick = function(event){
        var target = event.target;
        if(target.className == 'item2') {
            var s = target.getElementsByClassName('block2');
            s[0].classList.toggle("block-big");
        }
		var menu2 = document.querySelector('.item2');
		menu2.classList.toggle("red");
    }
	

