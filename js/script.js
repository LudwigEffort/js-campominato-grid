
const elePlayButton = document.querySelector('#btn-play');
const eleLevelSelect = document.querySelector('#level');
const eleWelcome = document.querySelector('.welcome');
const eleGrid = document.querySelector('.grid');

elePlayButton.addEventListener('click', function(){
    eleGrid.classList.remove('hidden');
    eleWelcome.classList.add('hidden');
     
    const nCell = parseInt(eleLevelSelect.value);;
    const sideSquare = Math.sqrt(nCell);
    eleGrid.style.setProperty('--sideSquare', sideSquare);

    for (let i = 1; i <= nCell; i++) {
        
        const eleCell = document.createElement('div');
        eleCell.classList.add('cell');
        eleCell.innerHTML = i;
        eleGrid.append(eleCell);
    
        eleCell.addEventListener('click',
    
            function () {
    
            this.classList.toggle('active');
    
        });
    }
});



