/******************************************
Treehouse FSJS Techdegree:
Project 2 - List Filter and Pagination
******************************************/
   

// stores list of students into `studentList` variable
const studentList = document.querySelectorAll('.student-item');
// stores the amount of students to show per page
const studentsPerPage = 10;



 
//`showPage` function hides all of the students that we do not want to show
function showPage (list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = (page * studentsPerPage );

   for (let i = 0; i < studentList.length; i += 1) {
      if( i >= startIndex && i < endIndex){
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
       
   }
   console.log(studentList);
};





/*****
 `appendPageLinks function` adds funtionality(/links) to page buttons so
 that when we click on our page numbers we see different ones each time
***/
function appendPageLinks (list) {
   const pages = (studentList.length / studentsPerPage) +1;
   const newDiv = document.createElement('div');

   newDiv.className = 'pagination';
   document.querySelector('.page').appendChild(newDiv);

   const newUl = document.createElement('ul');
   newDiv.appendChild(newUl);
   
   for (let i = 1; i < pages; i += 1) {
      const newLi = document.createElement('li');
      const links = document.createElement('a');
      newLi.appendChild(links);
      links.setAttribute('href', '#');
      links.textContent = i;
      newUl.appendChild(newLi);

      console.log(links.length);
   }
   const links = document.querySelectorAll('a');
   links.className = 'active';

   newUl.addEventListener('click', (e) => {
      for (let i = 0 ; i < links.length; i += 1){
         links[i].className = '';
      }
      e.target.className = 'active';
      pageNumber = e.target.textContent;
      showPage(studentList, pageNumber);
   });
};

// calls our functions and passes in our arguments(s)
showPage(studentList, 1);

appendPageLinks(studentList); 