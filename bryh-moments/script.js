try {
    let bryhMoments = ["https://cdn.discordapp.com/attachments/745207909486559313/745229456561668116/20200818_123541.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/746773365934653440/20200822_185033.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/746773887332647102/20200822_185238.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/747139929360039985/Screenshot_20200823-190608_Maps.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/766262025210298398/20201015_175340_0000.png", "https://cdn.discordapp.com/attachments/745207909486559313/766373395784663060/20201015_205251.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/769266051459973160/20201023_202712.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/770379767488184340/Screenshot_20201026-201233_Discord.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/771312224828522506/20201029_105850.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/771687007738658836/20201030_112236.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/777921722304692255/Screenshot_20201116-164209_Discord.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/778974625459601458/20201119_142650.jpg", "https://cdn.discordapp.com/attachments/745207909486559313/802991689416704010/20210124_210148.jpg"]
    bryhMoments.forEach(bryhMoment => {
    let img = document.createElement("img")
    let space = document.createElement("br")
    img.setAttribute("src",bryhMoment)
    document.body.appendChild(img)
    for (let i = 0; i < 5; i++) {
        document.body.appendChild(space)
    }
});
} catch (err){
    console.error(err)
}