window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const url="https://script.google.com/macros/s/AKfycbzSIFOjz0wS76wZpt-WGQ7Nv_CZFwbPXfaOijjXfzFIgQZ6ylu_ARctLL5SZ_4-M4UV/exec"
var player=GetPlayer()


fetch(url,{
  method:"POST",
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body:JSON.stringify({tennhanvien:player.GetVar("hovaten"),masonhanvien:player.GetVar("masonv"),nhapchucvu:player.GetVar("chucvu"),nhapcuahang:player.GetVar("cuahang"),nhaptinhthanhpho:player.GetVar("nhaptinh"),nhapvungmien:player.GetVar("vungmien"),cau1:player.GetVar("nhapcautraloi1"),cau2:player.GetVar("nhapcautraloi2"),cau3:player.GetVar("nhapcautraloi3"),cau4:player.GetVar("nhapcautraloi4"),cau5:player.GetVar("nhapcautraloi5"),cau6:player.GetVar("nhapcautraloi6"),cau7:player.GetVar("nhapcautraloi7"),cau8:player.GetVar("nhapcautraloi8"),cau9:player.GetVar("nhapcautraloi9"),cau10:player.GetVar("nhapcautraloi10"),dacbiet:player.GetVar("nhapochudacbiet")})
  
  }
  )
}

};
