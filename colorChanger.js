const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (btn) {

    btn.addEventListener('click', function (clk) {

        switch(clk.target.id){
            case clk.target.id = 'grey':
                body.style.backgroundColor = clk.target.id;
                body.style.color = 'white'

            break;

            case clk.target.id = 'orange':
                body.style.backgroundColor = clk.target.id;
                body.style.color = 'black'

            break;

            case clk.target.id = 'yellow':
                body.style.backgroundColor = clk.target.id;
                body.style.color = 'black'

            break;

            case clk.target.id = 'pink':
                body.style.backgroundColor = clk.target.id;
                body.style.color = 'black'
            break;


            case clk.target.id = 'white':
                body.style.backgroundColor = clk.target.id;
                body.style.color = 'black'

            break;
        }
    })
})


