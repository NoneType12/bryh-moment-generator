try {
    fetch('bryh-moments/export.json/').then(r=>r.json()).then(data=>{
        globalThis.bryhMoments =  data.bryhMoments;
        globalThis.description = data.descriptions
        return data
    });
    function bryhMomentGenerator(min,max){
        return Math.round(Math.random() * (1 + max - min));    
    }
    function getBryhMoment(){
        let bryhMomentSelector = bryhMomentGenerator(1,bryhMoments.length)
        if (bryhMomentSelector < 0){
            bryhMomentSelector++
        } else if(bryhMomentSelector > bryhMoments.length){
            bryhMomentSelector--
        }
        let bryhIMG = document.getElementById("bryhImg");
        var bryhDescription = document.getElementById('description');
        bryhDescription.textContent = description[bryhMomentSelector];
        bryhIMG.setAttribute("src", bryhMoments[bryhMomentSelector]);
        console.log(bryhMomentSelector);
    }
    let btn = document.getElementById("btn")
    btn.addEventListener("click", getBryhMoment)
    console.warn(('b' + 'a' + + 'a' + 'a').toLowerCase());
} catch (err){
    var errP = document.createElement('p');
    var errParent = document.getElementById('errParent');
    errP.setAttribute('id', 'err');
    errP.textContent = `There was an error, please try again later`;
    errParent.innerHTML = errP
    console.error(err);
}