function ispis()
{
  var lova;
  var cpu;
  var gpu;
  var kutija;
  var konfa;

  var mboMod;
  var cpuMod;
  var gpuMod;
  var ramMod;
  var ssdMod;
  var hddMod;
  var psuMod;
  var kutijaMod;
  
 var tmp
  

  var selected = document.forms[0];
  for (i = 0; i < 4; i++) {
    if (selected[i].checked) {
      lova = selected[i].value;
     
    }
  }
  for (i = 4; i < 6; i++) {
    if (selected[i].checked) {
      cpu = selected[i].value;
     
    }
  }
  for (i = 6; i < 8; i++) {
    if (selected[i].checked) {
      gpu = selected[i].value;
      
    }
  }
  for (i = 8; i < 10; i++) {
    if (selected[i].checked) {
      kutija = selected[i].value;
      
    }
  }

  if(lova=="3000")
  {
    
    psuMod="Fortron Hexa Plus 400W";
    gpuMod="integrirana";
    if(cpu=="AMD")
    {
      cpuMod="Ryzen 2400";
      mboMod=" Gigabyte A320M-S2H";
      ramMod="Patriot Elite DDR4, 2666Mhz, 8GB (2x4GB)HS";
      hddMod="nema";
      ssdMod="Crucial BX500 240GB"
    }
    else if(cpu=="Intel")
    {
      
      cpuMod="i3 8300";
      mboMod=" MSI H310M PRO-VD";
      ramMod="Patriot Elite DDR4, 2666Mhz, 8GB (2x4GB)HS";
      hddMod="nema";
      ssdMod="Crucial BX500 240GB"
    }
    if(kutija=="neprozirno")
    {
      kutijaMod=="MS WARRIOR kućište";
    }
    else if(kutija=="prozirno")
    {
      console.log("test kutija");
      kutijaMod="nazalost nemat dovoljno velik budzet";
    }
  }

  
  else if(lova==5500)
  {
    psuMod="Fortron Hyper 600W";
    if(cpu=="AMD")
    {
      cpuMod="Ryzen 1600";
      mboMod="GIGABYTE GA-AB350M-DS3H";
      ramMod="Patriot Elite DDR4, 3000Mhz, 8GB (2x4GB)HS";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
    else if(cpu=="Intel")
    {
      cpuMod="i3 8300";
      mboMod=" MSI H310M PRO-VD";
      ramMod="Patriot Elite DDR4, 2666Mhz, 8GB (2x4GB)HS";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
    if(kutija=="neprozirno")
    {
      kutijaMod="MS WARRIOR kućište";
    }
    else if (kutija=="prozirno")
    {
      
      kutijaMod="Sharkoon TG4 Midi Tower";
    }
    if(gpu=="nvidia")
    {
      gpuMod="INNO3D NVIDIA GeForce GTX 1660 Twin X2 6GB";
    }
    else if(gpu=="ati")
    {
      gpuMod=" SAPPHIRE AMD Radeon NITRO+ RX 580 8GB";
    }
  }

  else if(lova==7000)
  {
    psuMod="Fortron Hexa Plus 400W";
    
    if(cpu=="AMD")
    {
      cpuMod="Ryzen 2600";
      mboMod=" Gigabyte B450 GAMING X";
      ramMod="GSkill Aegis 16GB (2x8) DDR4 3000MHz";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
    else if(cpu=="Intel")
    {
      cpuMod="i5-9400F";
      mboMod="MSI B360-A PRO";
      ramMod="GSkill Aegis 16GB (2x8) DDR4 3000MHz";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
  
    if(kutija=="neprozirno")
    {
      kutijaMod="MS WARRIOR kućište";
    }
    else  if (kutija=="prozirno")
    {
      kutijaMod="Sharkoon TG4 Midi Tower";
    }
    if(gpu=="nvidia")
    {
      gpuMod="INNO3D NVIDIA GeForce GTX 1660 Twin X2 6GB";
    }
    else if(gpu=="ati")
    {
      gpuMod=" SAPPHIRE AMD Radeon NITRO+ RX 580 8GB";
    }
  }



  else if(lova==10000)
  {
    
    psuMod="Seasonic FOCUS Plus 650 Gold";
    if(cpu=="AMD")
    {
      cpuMod="Ryzen 2700";
      mboMod="MSI X470 GAMING PLUS ATX AM4";
      ramMod="GSkill Aegis 16GB (2x8) DDR4 3000MHz";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
    else if(cpu=="Intel")
    {
      cpuMod="i7 8700";
      mboMod="MSI B360-A PRO";
      ramMod="GSkill Aegis 16GB (2x8) DDR4 3000MHz";
      hddMod="Toshiba P300 1TB";
      ssdMod="Crucial BX500 240GB"
    }
    if(kutija=="neprozirno")
    {
      kutijaMod="MS WARRIOR kućište";
    }
    else if (kutija=="prozirno")
    {
      kutijaMod="Sharkoon TG4 Midi Tower";
    }
    if(gpu=="nvidia")
    {
      gpuMod="GeForce RTX 2070 Dual";
    }
    else if(gpu=="ati")
    {
      gpuMod="Sapphire PULSE RADEON RX VEGA 56";
    }
    
  }
  


  konfa=" budzet "+lova+"\n cpu "+cpuMod+"\n mbo "+mboMod+"\n gpu "+gpuMod+"\n ram "+ramMod+"\n psu "+psuMod+"\n kuciste "+kutijaMod;
  alert(konfa);
  console.log(konfa);
}

  

