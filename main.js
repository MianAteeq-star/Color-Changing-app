var index=0;
changeClr =()=>{
    var colors=[ 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'gray', 'white'];
document.getElementsByTagName('body')[0].style.backgroundColor=colors [index++];

if(index > colors.length -1)
index=0;
}