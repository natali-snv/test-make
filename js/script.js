//HUMBURGER

let menuBtn = document.querySelector('#hamburger__button');
const modal = document.querySelector("#myModal");
let item = document.querySelectorAll('.item');
let isOpened = false;

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    if (!isOpened) {
        modal.style.display = "block";
        isOpened = true;
    } else {
        modal.style.display = "none";
        isOpened = false;
    }
})

item.forEach(function(el) {
  el.addEventListener('click', function() {
      item.forEach(function(el) {
          el.classList.remove('activ');
          modal.style.display = "none";
      });
      this.classList.add('activ');
  });
});

//TAB

function openTranscript(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

//ERROR EMAIL

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const formControl = document.querySelector('.form-control');
const errorMessage = document.querySelector('.error-message');

emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value.trim();

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
        formControl.classList.add('error');
        errorMessage.textContent = 'Текст ошибки';
    } else {
        formControl.classList.remove('error');
        errorMessage.textContent = '';
    }
});

//ACCORDION

let acc = document.getElementsByClassName("accordion-text");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("activate");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.borderBottom = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.borderBottom = "2px solid #3E29E3";
        }
    });
}

let defaultPanel = document.getElementsByClassName("panel")[2];
defaultPanel.style.maxHeight = defaultPanel.scrollHeight + "px";
defaultPanel.style.borderBottom = "2px solid #3E29E3";
let defaultButton = document.getElementsByClassName("accordion-text")[2];
defaultButton.classList.add("activate");



//COMPONENT

let x, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            let y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        this.classList.toggle("sel")
    });
}

function closeAllSelect(elmnt) {
    let x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);