

addEventListener("DOMContentLoaded", (event) => {

  // Find elements that has intersected: class elements
  function findIntersectClasses(object) {
    // Get the classes of the element
    var classes = object.target.classList;
    var intersectedClasses = [];
  
    // Iterate over the classes
    for (var i = 0; i < classes.length; i++) {
      var className = classes[i];
      // Check if the class starts with "intersected:"
      if (className.startsWith('intersected:')) {
        // Extract the content after "intersected:"
        var content = className.substring('intersected:'.length);

        console.log(content)
        // Add the content to the array
        intersectedClasses.push(content);
      }
    }
  
    // Return the array of intersected classes
    return intersectedClasses;
  }

    // Find elements that has intersected: class elements
    function findUnintersectClasses(object) {
      // Get the classes of the element
      var classes = object.target.classList;
      var unintersectedClasses = [];
    
      // Iterate over the classes
      for (var i = 0; i < classes.length; i++) {
        var className = classes[i];
        // Check if the class starts with "intersected:"
        if (className.startsWith('unintersected:')) {
          // Extract the content after "intersected:"
          var content = className.substring('unintersected:'.length);
  
          console.log(content)
          // Add the content to the array
          unintersectedClasses.push(content);
        }
      }
    
      // Return the array of intersected classes
      return unintersectedClasses;
    }

  // Iteract between elements that has intersect class
  const toAnimate = document.querySelectorAll('.intersect')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        if (findIntersectClasses(entry)) {
          entry.target.classList.add(...findIntersectClasses(entry));
          entry.target.classList.remove(...findUnintersectClasses(entry));
        }

      } else {
        if (findUnintersectClasses(entry)) {
          entry.target.classList.remove(...findIntersectClasses(entry));
          entry.target.classList.add(...findUnintersectClasses(entry));
        }
      }
    });
  },
    {
      threshold: 0.7
    });

  for (let i = 0; i < toAnimate.length; i++) {
    const elements = toAnimate[i];

    observer.observe(elements);
  }

});
