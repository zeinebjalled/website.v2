const sections = document.querySelectorAll ("section");
const bubble = document.querySelector (".bubble");
const gradients =[
    "linear-gradient(to right top ,#ddd6f3 ,#faaca8  )";
    "linear-gradient(to right top ,#ddd6f3 ,#faaca8  )";
    "#faaca8"; 
];
const options ={
    threshold: 0.7
}; 

let observer = new IntersectionObserver (navcheck,options);

 function navcheck(entries) {
entries.forEach(entry => {
  const className = entry.target.classname; 
  const activeanchor =document.querySelector('[data-page=${classname}]');
const gradientIndex = entry.target.getattribute('data-index');
const coords = activeanchor.getBoundingClientRect();
const directions ={
    height:coords.height,
    width:coords.width,
    top:coords.top,
    left:coords.left

};
if (entry.isIntersecting){
    bubble.style.setProperty("left", '${directions.left}px');
    bubble.style.setproperty("top", '${directions.top}px');
    bubble.style.setproperty("widtht", '${directions.width}px');
    bubble.style.setproperty("height", '${directions.height}px');
    bubble.style.background = gradients [gradientIndex];
    
}
});
 }

 sections.forEach(section => {
     observer.observe(section);
 }); 