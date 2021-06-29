/**
 * Define Global Variables
 *
*/
const fourSections = document.querySelectorAll("section"); //select all section and store in one variable (fourSection) so when add some method or properties to this variable it will edit all sections
const navBarList = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment(); // virtual element does not cast anr reflow or repaint




function createNav(){                                               // function for create navBarlIST and linksin it for sections
  fourSections.forEach(function(elem) {
	const dataNav = elem.getAttribute("data-nav");
 	const newLink =  document.createElement("li");
  newLink.innerText= dataNav;
  fragment.appendChild(newLink);
  newLink.addEventListener("click",function (){elem.scrollIntoView({behavior: "smooth"});   //addEventListener for scroll
      });
   });
 navBarList.appendChild(fragment);

navBarList.style.cssText="background-color : red ; color : black ; font-size : 2em"   //style for navBarList

}


 function activeSection(){                                              // function for your-active-class & active.link-class
 		window.addEventListener("scroll",function(){
     fourSections.forEach(function(sect){
     rect = sect.getBoundingClientRect();       //it takes dimentions
    if(rect.top>= -50 && rect.top <= 350) {
       sect.classList.add ("your-active-class");


    //for link-active-class but it can not work
                    const activeDataNav = sect.getAttribute("data-nav");
                    const allLink = document.querySelectorAll("li");
                    allLink.forEach(function(lin){
                            if(lin.innerText == activeDataNav ){
                             lin.classList.add ("active-link-class")
                                 }
                                 else {
                                   lin.classList.remove ("active-link-class")
                               }
                       })
                 }
       });
     });
 }

createNav(); //call function createNav()

activeSection();  //call function activeSection()
