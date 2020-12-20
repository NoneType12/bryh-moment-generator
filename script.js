function bryhMomentGenerator(min,max){
    return Math.round(Math.random() * (1 + max - min) + min);    
}
//And this is my script
console.log('This is the console, now tell me what are you doing here');
const bryhMomentSelector = bryhMomentGenerator(1,13)
if(bryhMomentSelector == 1){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/745229456561668116/20200818_123541.jpg"/>');
} else if(bryhMomentSelector == 2){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/746773365934653440/20200822_185033.jpg"/>');
} else if(bryhMomentSelector == 3){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/746773887332647102/20200822_185238.jpg"/>');
} else if(bryhMomentSelector == 4){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/747139929360039985/Screenshot_20200823-190608_Maps.jpg"/>');
} else if(bryhMomentSelector == 5){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/766262025210298398/20201015_175340_0000.png"/>');
} else if(bryhMomentSelector == 6){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/766373395784663060/20201015_205251.jpg"/>');
} else if(bryhMomentSelector == 7){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/769266051459973160/20201023_202712.jpg/>');
} else if(bryhMomentSelector == 8){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/769284421282693160/20201023_214121.jpg"/>');
} else if(bryhMomentSelector == 9){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/770379767488184340/Screenshot_20201026-201233_Discord.jpg"/>');
} else if(bryhMomentSelector == 10){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/771312224828522506/20201029_105850.jpg"/>');
} else if(bryhMomentSelector == 11){
    document.write('<h3>In this bryh moment, Mucs found a Minecraft exercise in his Math Book</h3>');
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/771687007738658836/20201030_112236.jpg"/>');
} else if(bryhMomentSelector == 12){
    document.write('<h3>In this bryh moment, Mucs accidentally enabled permissions for Meme of The Day</h3>');
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/777921722304692255/Screenshot_20201116-164209_Discord.jpg"/>');
} else if(bryhMomentSelector == 13){
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/778974625459601458/20201119_142650.jpg"/>');
} else{
    document.write('<img src="https://cdn.discordapp.com/attachments/745207909486559313/783720312754667570/20201202_164433.jpg"/>');
}