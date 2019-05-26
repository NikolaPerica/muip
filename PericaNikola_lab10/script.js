function iste() {
    if (document.getElementById('pswrd').value ==
      document.getElementById('ponovljena').value) {
      document.getElementById('lozinka').style.color = 'green';
      document.getElementById('lozinka').innerHTML = 'ispravna';
    } else {
      document.getElementById('lozinka').style.color = 'red';
      document.getElementById('lozinka').innerHTML = 'nije ista';
    }
  }

  function mailer(mail) {
    var regexMail=/^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/;
    var ema=mail.value;
    if (regexMail.test(ema)) {
      document.getElementById('posta').style.color = 'green';
      document.getElementById('posta').innerHTML = "ispravna";
    } else {
      document.getElementById('posta').style.color = 'red';
      document.getElementById('posta').innerHTML = "format nesto@nesto.com";
    }
  }

  function brojevi(postabr) {
    var regexBrojevi=/^\d{5}$/;
    var br=postabr.value;
    if (regexBrojevi.test(br)) {
      document.getElementById('postabr').style.color = 'green';
      document.getElementById('postabr').innerHTML = "ispravna";
    } else {
      document.getElementById('postabr').style.color = 'red';
      document.getElementById('postabr').innerHTML = "samo 5 brojeva";
    }
  }

  function slovaG(gradovi) {
    var regexSlova=/^[A-Za-z]{3,}$/;
    var gr=gradovi.value;
    if (regexSlova.test(gr)) {
      document.getElementById('gradic').style.color = 'green';
      document.getElementById('gradic').innerHTML = "ispravna";
    } else {
      document.getElementById('gradic').style.color = 'red';
      document.getElementById('gradic').innerHTML = "samo slova";
    }
  }
  function slovaD(drzave) {
    var regexSlova=/^[A-Za-z]{3,}$/;
    var dr=drzave.value;
    if (regexSlova.test(dr)) {
      document.getElementById('drzavica').style.color = 'green';
      document.getElementById('drzavica').innerHTML = "ispravna";
    } else {
      document.getElementById('drzavica').style.color = 'red';
      document.getElementById('drzavica').innerHTML = "samo slova";
    }
  }

  function kime(uname) {
    var regexSlBr=/^[A-Za-z0-9]{3,}$/;
    var un=uname.value;
    if (regexSlBr.test(un)) {
      document.getElementById('ime').style.color = 'green';
      document.getElementById('ime').innerHTML = "ispravna";
    } else {
      document.getElementById('ime').style.color = 'red';
      document.getElementById('ime').innerHTML = "samo slova i brojevi vise od 3 znaka";
    }
  }
  function address(addr) {
    var regexSlBr=/^[A-Za-z0-9\ ]{3,}$/;
    var ad=addr.value;
    if (regexSlBr.test(ad)) {
      document.getElementById('addresa').style.color = 'green';
      document.getElementById('addresa').innerHTML = "ispravna";
    } else {
      document.getElementById('addresa').style.color = 'red';
      document.getElementById('addresa').innerHTML = "samo slova i brojevi razmak izmedu";
    }
  }

  function telef(tele) {
    var regexTel=/^\d{12,}$/;
    var te=tele.value;
    if (regexTel.test(te)) {
      document.getElementById('telefoni').style.color = 'green';
      document.getElementById('telefoni').innerHTML = "ispravna";
    } else {
      document.getElementById('telefoni').style.color = 'red';
      document.getElementById('telefoni').innerHTML = "samo 12 ili vise brojeva";
    }
  }