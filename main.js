var distance= 0
var heightId
function changeHeight(e) {
    if (e.key == "Enter") {
        stopHeight() 
        return; 
    }
    heightId= setInterval (()=> {
        my_div.style.height= distance++ + "px"
    },100)

} 
function stopHeight() {
    clearInterval (heightId)
}
// function stopWithEnter (e) {
//     if (e.key == "Enter") {
//         stopHeight()  
//     } 
// }

function changeColor (){
    setInterval (()=>{
        color_div.style.background= "red"

    },1000)

}
changeColor()
