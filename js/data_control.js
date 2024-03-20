let database = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const createdata = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let data = {
        id: Date.now(),
        region: document.getElementById('region').value,
        center_name: document.getElementById('center_name').value,
        school: document.getElementById('school').value,
        cybercap_code: document.getElementById('cybercap_code').value,
        street_number: document.getElementById('street_number').value,
        city_name: document.getElementById('city_name').value,
        postal_code: document.getElementById('postal_code').value,
        name: document.getElementById('name').value,
        fonction: document.getElementById('fonction').value,
        courriel: document.getElementById('courriel').value,
        primary_cell: document.getElementById('primary_cell').value,
        secondary_cell: document.getElementById('secondary_cell').value,
        commentaire: document.getElementById('commentaire').value
    }
    database.push(data);
    document.forms[0].reset(); // to clear the form for the next entries
    document.querySelector('form').reset();

    //for display purposes only
    console.warn('added' , {database} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(database, '\t', 2);

    //saving to localStorage
    localStorage.setItem('localstorage', JSON.stringify(database) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('nextBtnR').addEventListener('click', createdata);
});


