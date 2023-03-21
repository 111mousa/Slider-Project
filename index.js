let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = sliderImages.length;
let currentSlide = 4;
let slideNumberElement = document.getElementById("slid-number");    
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let paginationElement = document.createElement("ul");
paginationElement.setAttribute('id','pagination-ul');
for(var i=0;i<slidesCount;i++){
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute("data-index",i);
    let text = document.createTextNode(`Slide #${i+1}`);
    paginationItem.appendChild(document.createTextNode(i)); 
    paginationElement.appendChild(paginationItem);
}
document.getElementById('indicators').appendChild(paginationElement);
paginationCreatedUl = document.getElementById("pagination-ul");
paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));
for(var i=0;i<paginationBullets.length;i++){
    paginationBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
theChecker();
function theChecker(){
    slideNumberElement.textContent = "Slide #" + (currentSlide+1) + " of " + slidesCount;
    removeAllActive();
    sliderImages[currentSlide].classList.add('active');
    paginationCreatedUl.children[currentSlide].classList.add('active');
    if(currentSlide===0){
        prevButton.classList.add('disabled');
    }else{
        prevButton.classList.remove('disabled');
    }
    if(currentSlide===slidesCount-1){
        nextButton.classList.add('disabled');
    }else{
        nextButton.classList.remove('disabled');
    }
}
function removeAllActive(){
    sliderImages.forEach(function(e){
        e.classList.remove("active");
    } );
    paginationBullets.forEach(function(e){
        e.classList.remove('active');
    });
}
function nextSlide(){
    if(nextButton.classList.contains('disabled'))
    return false;
    else{
    currentSlide++;
    theChecker();
}
}
function prevSlide(){
    if(prevButton.classList.contains('disabled'))
    return false;
    else{
    currentSlide--;
    theChecker();
}
}
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;