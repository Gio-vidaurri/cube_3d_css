(function () {
	var rotateY = 0,
		  rotateX = 0;
	var color="#FF8100";

	document.onkeydown = function (e) {
		console.log(e);
		switch(e.keyCode) {
// si se preciona abajo girar -45 grados
			case 37:
				rotateY -= 45;
				color="red";
				break;
// si se preciona derecha girar 45 grados
			case 38:
				rotateX += 45;
				color="blue";
				break;
// si se preciona arriba girar 45 grados
			case 39:
				rotateY += 45;
				color="hotpink";
				break;
// si se preciona izquierda girar 45 grados
			case 40:
				rotateX -= 45;
				color="orange";
				break;
		}
		// 	   if (e.keyCode === 37) rotateY -= 45;
		// else if (e.keyCode === 38) rotateX += 45;
		// else if (e.keyCode === 39) rotateY += 45;
		// else if (e.keyCode === 40) rotateX -= 45;

		document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';

      	document.querySelector('.cube').style.backgroundColor =color; 
     
    }
})();