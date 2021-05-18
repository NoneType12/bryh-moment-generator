try {
    fetch('export.json').then(r=>r.json()).then(data=>{
        var bryhMoments = data.bryhMoments;
        var descriptions = data.descriptions;
        for (let i = 0; i <= bryhMoments.length; i+=1) {
            let img = document.createElement("img");
            let space = document.createElement("br");
            var descriptionElement = document.createElement('h2');
            img.setAttribute("src",bryhMoments[i]);
            descriptionElement.textContent = descriptions[i];
            document.body.appendChild(descriptionElement);
            document.body.appendChild(img);
            for (let i = 0; i < 5; i++) {
                document.body.appendChild(space)
            }
        }
    });
} catch (err){
    console.error(err)
}