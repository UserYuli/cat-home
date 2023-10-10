var index = 0
setInterval(() => {
    var control = document.querySelector('.banner-slides')
    var classVal = document.getElementById('ulID').getAttribute('class')
    var labels = control.children
    labels[index].checked = true
    index++
    if (index == 3) {
        index = 0
    }
    // if (index == 2) {
    //     sl.classList.remove('trans')
    // }
    // else {
    //     sl.style.transition = `.5s transform ease-in-out`;
    // }

    // console.log(index, sl.classList)
}, 1500);