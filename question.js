(function(){
    const titleQuestions = [...document.querySelectorAll(".questions-title")];

    titleQuestions.forEach(question =>{
        question.addEventListener("click", ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
            
            question.children[0].classList.toggle("questions-arrow-rotate");
            addPadding.classList.toggle("questions-padding-add");

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }
            answer.style.height = `${height}px`;

        });
    });

})();


//AOS animaciones
AOS.init();