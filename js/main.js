const input = num => {
    document.form.textview.value = document.form.textview.value + num;
};

const result = () => {
    let val = document.form.textview.value;
    if (val) {
        document.form.textview.value = eval(val);
    }
};

const clearAll = () => {
    document.form.textview.value = '';
};

const delOneSymbol = () => {
    let val = document.form.textview.value;
    document.form.textview.value = val.substring(0,val.length-1);
};