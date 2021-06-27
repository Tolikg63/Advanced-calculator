const items = document.querySelectorAll('.act');
const cleanBtn = document.querySelector('.clean');
const back = document.querySelector('.back');
const equal = document.querySelector('.equal');

function insert() {
   document.form.textview.value = document.form.textview.value + this.innerHTML;
}

cleanBtn.addEventListener('click', function () {
   document.form.textview.value = "";
});

items.forEach((el) => {
   el.addEventListener('click', insert);
});

back.addEventListener('click', function() {
   let exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0, exp.length - 1);
})

equal.addEventListener('click', function() {
   let exp = document.form.textview.value;
   if (exp) {
      document.form.textview.value = eval(exp);
   }
})

