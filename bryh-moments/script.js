try {
    fetch('export.json').then(r=>r.json()).then(data=>{
        var bryhMoments = data.bryhMoments
        bryhMoments.forEach(bryhMoment => {
            let img = document.createElement("img")
            let space = document.createElement("br")
            img.setAttribute("src",bryhMoment)
            document.body.appendChild(img)
            for (let i = 0; i < 5; i++) {
                document.body.appendChild(space)
            }
        });        
    });
} catch (err){
    console.error(err)
}