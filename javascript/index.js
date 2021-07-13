
window.onload = function() {
    const frame1 = top.frame1;
    const frame2 = top.frame2;

    console.log(frame1);
    console.log(frame2);

    const buttonFrame1 = frame1.document.querySelector("#btn-frame-1");
    const textAreaFrame1 = frame1.document.querySelector("#textarea-frame1");

    const buttonFrame2 = frame2.document.querySelector("#btn-frame-2");
    const textAreaFrame2 = frame2.document.querySelector("#textarea-frame2");

    buttonFrame1.addEventListener("click", function(){
        textAreaFrame2.value = textAreaFrame1.value;
    });
    
    buttonFrame2.addEventListener("click", function(){
        textAreaFrame1.value = textAreaFrame2.value;
    });
    
}
