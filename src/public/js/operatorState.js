function operatorState(h) {
    //Zero Zone
    var localDate = new Date();
    var zeroDate = localDate.toUTCString();
    zeroTime = ((zeroDate.split(" "))[4]).split(":");
    zeroInSec = (zeroTime[0] * 3600) + (zeroTime[1] * 60);
    a = h.slice(0, 5); a1 = a.split(":"); a2 = (a1[0] * 3600) + (a1[1] * 60); //openhour
    b = h.slice(6, 11); b1 = b.split(":"); b2 = (b1[0] * 3600) + (b1[1] * 60); //endhour
    pol = h.slice(12, 13)//operator (+ or -)
    c = h.slice(13, 18); c1 = c.split(":"); c2 = (c1[0] * 3600) + (c1[1] * 60);//gmt zone
    oh = 0;
    eh = 0;
    getOhEh()
    function getOhEh() {
        if (pol == "+") { oh = a2 - c2; eh = b2 - c2 }
        else { oh = a2 + c2; eh = b2 + c2 }
    }
  
    if ((oh < eh && zeroInSec >= oh && zeroInSec < eh) || (oh > eh && zeroInSec < eh && zeroInSec < oh) || (oh == eh)) {
        return true;
    }
    else {
        return false;
    }
  }