console.log('Hello World!');
 const loading_container = document.querySelector('.loading-container')
document.querySelector('img').onload=()=>{
  loading_container.classList='loading-container-close'
}

// star over


loade=()=>{
  loading_container.classList='loading-container-close'
}
setTimeout(loade, 4000);
