    var text ="We are not <font color='red'><b>Cracker</b></font>, We are <font color='lime'><b>Hacker</b></font><br/>Don't worry your data is safe";
    var delay=10000;
    var currentChar=1;
    var destination="[none]";
    function type(){
      {
        var dest=document.getElementById(destination);
        if (dest){
          dest.innerHTML=text.substr(0, currentChar)+"<blink></blink>";
          currentChar++;
          if (currentChar>text.length){
            currentChar=1;
            setTimeout("type()", 10000);
          }
          else{
            setTimeout("type()", delay);
          }
        }
      }
    }
    function startTyping(textParam, delayParam, destinationParam){
      text=textParam;
      delay=delayParam;
      currentChar=1;
      destination=destinationParam;
      type();}
      javascript:startTyping(text, 100, "writen");
