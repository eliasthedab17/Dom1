function doit(){
  let para=document.querySelector('#text');
  let classinput=document.querySelector('#classInput');
  let element3=classinput.value;
  para.classList.toggle(element3);
}
//if method 
/*
function doit1(){
  let para = document.querySelector('#text');
  let classinput = document.querySelector('#classInput');
  if(classinput.value=='highlight')
    para.style.backgroundColor='red';
  if(classinput.value=='bold')
    para.style.fontWeight='bold';
   if(classinput.value=='underline')
    para.style.textDecoration='underline';
}
   */
  function allp(id){
   let elem=document.getElementById(id);
   /*let elem=document.querySelector(`#${id}`);   another method */ 
    elem.classList.toggle("hidden");
  }
  function letsclick(){
    let elem=document.getElementById('myclick');
    elem.value='clicked!';
  }
  