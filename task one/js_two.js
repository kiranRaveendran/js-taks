function swap(){
    var img1= document.getElementById('img_one')
    var img2= document.getElementById('img_two')
    var img_src1 = img1.src
    var img_src2 = img2.src 
    // Therefor:  here we applying the swaping logic
    img1.src = img_src2
    img2.src= img_src1
}