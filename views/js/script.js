document.addEventListener('DOMContentLoaded',()=>{
    // const selectDrop=document.querySelector('#country');
    const selectDrop=document.getElementById('country')
    fetch("http://restcountries.eu/rest/v2/all").then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    })

})