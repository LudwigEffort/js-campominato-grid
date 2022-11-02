const   eleGrid = document.querySelector('.grid');

for (let i = 0; i < 100; i++) {
    
    const eleCell = document.createElement('div');
    eleCell.classList.add('cell');
    eleGrid.append(eleCell);

    eleCell.addEventListener('click',
                            function () {

                                this.classList.toggle('active');

                            });
}
