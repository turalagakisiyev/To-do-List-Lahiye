let myNodelist = document.getElementsByTagName("LI");
let i;

const sortButton = document.querySelector('#myDIV>img')

let liElements = document.getElementById('myUL')


liElements.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
})


function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Bir sheyler elave et!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}



sortButton.addEventListener("click", () => {


    let ar = []
    const data = [...liElements?.children]
    data.forEach(item => {
        ar.push(item.innerHTML)
    })
    ar.sort();
    liElements.innerHTML = ""
    ar.forEach(item => {
        let li = `<li>${item}</li>`

        liElements.innerHTML += li
    })


})





let sekil1 = document.querySelector('.sekil2')

sekil1.addEventListener("click", () => {

    let ar = []
    const data = [...liElements?.children]
    data.forEach(item => {
        ar.push(item.innerHTML)
    })
    ar.sort();
    ar.reverse();
    liElements.innerHTML = ""
    ar.forEach(item => {
        let li = `<li>${item}</li>`

        liElements.innerHTML += li
    })

})



sekil1.addEventListener("click", () => {
    sortButton.style.display = "block";
    sekil1.style.display = "none";
    let arr = [];
    list.push(arr);
    arr.forEach((item) => {
        item.sort();
        item.reverse();
    });
})


if (
    sortButton.addEventListener("click", () => {
        sekil1.style.display = "block";
        sortButton.style.display = "none";
    })
) {
}
