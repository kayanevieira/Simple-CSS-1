function transition() {
    const content1 = document.getElementById("content-1");
    const content2 = document.getElementById("content-2");
    const container = document.getElementById("container");
    if (content1.style.maxWidth == "") {
        content1.style.position = "absolute";
        content1.style.maxWidth = "25%";
        content2.style.maxWidth = "100%";
        content1.style.overflow = "hidden";
    } else {
        content1.style.maxWidth = "";
        content1.style.padding = "0px"
        content1.style.border = "none";
    }
  }

function openModal(){
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}
  
function closeModal(){
  const modal = document.getElementById("modal");
  modal.style.display = "none"; 
}