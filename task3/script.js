window.addEventListener('DOMContentLoaded', function() {
	var available = document.getElementsByClassName('blockList available')[0].getElementsByTagName('form')[0].elements[0],
	btnRight = document.getElementsByClassName('btnRight')[0],
	btnAllRight = document.getElementsByClassName('btnAllRight')[0],
	btnLeft = document.getElementsByClassName('btnLeft')[0],
	btnAllLeft = document.getElementsByClassName('btnAllLeft')[0],
	selected = document.getElementsByClassName('blockList selected')[0].getElementsByTagName('form')[0].elements[0],
	warningMessage = document.getElementsByClassName('warningMessage')[0];


	available.onclick = function(){
		removeWarning();

	}

	selected.onclick = function(){
		removeWarning();
	}

	btnRight.onclick = function () {moveSelectedOption(available, selected);};
	btnLeft.onclick = function () {moveSelectedOption(selected, available);};
	btnAllRight.onclick = function() {moveAllOption(available, selected);};
	btnAllLeft.onclick = function() {moveAllOption(selected, available);};

	function removeWarning(){
		warningMessage.style.visibility = 'hidden';
	}

	function moveSelectedOption (from, to){
		removeWarning();

		let warningFlag = true;
		for (var i = 0; i < from.options.length; i++) {
			var option = from.options[i];
			if(option.selected) {
				i--;
				warningFlag = false;
				to.appendChild(option);
				option.selected ="";
			}
		}

		if (warningFlag){
			warningMessage.style.visibility = 'visible';
		}
	}

	function moveAllOption(from,to){
		removeWarning();

		let elements = from.options;
		for (var i = 0; i < elements.length; i++) {
				let currentOption = elements[i--];
				to.appendChild(currentOption);
				currentOption.selected ="";
			}
	}

});