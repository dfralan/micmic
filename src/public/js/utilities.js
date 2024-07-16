function clickOnTeller(){
    const buttonFatherBrick = document.getElementById('buttonFatherBrick');
    if (buttonFatherBrick){
      buttonFatherBrick.click();
    }
}

function toggleDisplay(selector) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    console.error(`No elements found for selector: ${selector}`);
    return;
  }

  elements.forEach(element => {
    if (element.classList.contains("display-none")) {
      element.classList.remove("display-none");
    } else {
      element.classList.add("display-none");
    }
  });
  
}

