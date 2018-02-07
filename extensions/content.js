(function () {

    const artyom = new Artyom();

    artyom.addCommands({
        indexes: ['ok', 'cancel'],
        action(i) {
            let selectedWord = this.indexes[i];
            document.querySelectorAll('#container>input').forEach(item => item.style.backgroundColor = '#fff');
            document.querySelector(`#${selectedWord}`).style.backgroundColor = 'red';
        }
    });

    artyom.initialize({
        lang:"en-GB",// A lot of languages are supported. Read the docs !
        continuous:true,// recognize 1 command and stop listening !
        listen:true, // Start recognizing
        debug:true, // Show everything in the console
        // speed:1 // talk normally
    }).then(function(){
        console.log("Ready to work !");
    });


})();