(function () {

    const artyom = new Artyom();

    artyom.addCommands({
        indexes: ['back', 'ben', 'fair', 'bear', 'beck'],
        action() {
            console.log('start back');
            let dom = document.querySelector(`.img-prev`);
            dom.click();
        }
    });

    artyom.addCommands(
        {
            indexes: ['na', 'map', 'mass', 'mess', 'next', 'ness', 'Nas', 'nice', 'meth', 'nurse', 'NERF', 'Naz', 'nest', 'now', 'neff',
                'no', 'Nash', 'nurse'],
            action() {
                console.log('start next');
                let dom = document.querySelector(`.img-next`);
                dom.click();
                // let selectedWord = this.indexes[i];
                // document.querySelectorAll('#container>input').forEach(item => item.style.backgroundColor = '#fff');
                // document.querySelector(`#${selectedWord}`).style.backgroundColor = 'red';
            }
        });

    artyom.initialize({
        lang: "en-GB",// A lot of languages are supported. Read the docs !
        continuous: true,// recognize 1 command and stop listening !
        listen: true, // Start recognizing
        debug: true, // Show everything in the console
        speed:1 // talk normally
    }).then(function () {
        console.log("Ready to work !");
    });


})();