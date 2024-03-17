# projects related to Dom

## PROJECT LIK 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button')
// console.log(buttons);
// const body = document.body
const body = document.querySelector('body')
console.log(body);

buttons.forEach( function (button) {
    console.log(button)
    button.addEventListener('click', function(superman){
        console.log(superman);
        console.log(superman.target);
        // if (superman.target.id === 'grey') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'white') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'blue') {
        //     body.style.backgroundColor = superman.target.id;
        // }
        // if (superman.target.id === 'yellow') {
        //     body.style.backgroundColor = superman.target.id;
        // }


                    //  also can be done with switch


        switch (superman.target.id) {

            case 'red':
                body.style.backgroundColor = superman.target.id
                break;
            case 'orange':
                body.style.backgroundColor = superman.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = superman.target.id
                break;
            case 'green':
                body.style.backgroundColor = superman.target.id
                break;
            case 'blue':
                body.style.backgroundColor = superman.target.id
                break;
            case 'indigo':
                body.style.backgroundColor = superman.target.id
                break;
            case 'purple':
                body.style.backgroundColor = superman.target.id
        
            default:
                
                break;
        }
    })
})
```

