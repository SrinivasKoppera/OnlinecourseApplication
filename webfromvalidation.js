//form validation//

document.getElementsByClassName('needs-validation')[0].addEventListener("submit",function(event){
    if(event.target.checkValidity()==false)
    {
        event.preventDefault();
        event.target.classList.add('was-validated');
    }
})