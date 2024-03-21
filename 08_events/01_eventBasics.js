// document.getElementById('owl').onclick = function (){
    //     alert(" owl clicked")
    // // this approch is also less recommended
    // }

    document.getElementById('owl').addEventListener('click', function () {
        alert('owl clicked again')
    } , false)

    // attachEvent()
    // jQuery - on

document.getElementById('owl').addEventListener('click', function (e) {
    console.log(e);

    // type ,  timestamp , defaultPrevented
})