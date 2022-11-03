const   eleGrid = document.querySelector('.grid');

let f = 101;

for (let i = 1; i < f; i++) {
    
    const eleCell = document.createElement('div');
    eleCell.classList.add('cell');
    eleGrid.append(eleCell);

    eleCell.addEventListener('click',

        function () {

        this.classList.toggle('active');

    });
}
