const projects = document.querySelectorAll('.work')
projects.forEach(project => {
  const opener = project.querySelector('.container')
  opener.addEventListener('click', () => {
    // close all the other sections
    [...projects].filter(q => q !==project).forEach(q => q.classList.remove('opened'))

    // then open the current section
    project.classList.toggle('opened')
  })
})

