const toner_29 = {
  nazwa:"Toner 29",
  printers:"IR-ADV C5030 / C5030 / C5035 / C5235 / C5240",
  cyan: 12,
  magenta: 8,
  yellow: 23,
  black: 10,
  pojemnik: 10
  }



function toner29(kolor){



  const listElement = 
  `
  <div class="row alert alert-primary alert-dismissible fade show" role="alert">
  <div class="col-6 col-md-1">1</div>
  <div class="col-6 col-md-3">${toner_29.nazwa}</div>
  <div class="col-6 col-md-2">${kolor}</div>
  <div class="col-6 col-md-4">${toner_29.printers}</div>
  <div class="col-6 col-md-1">
  <input type="text" class="form-control" value="1">
  </div>
  <div class="col-6 col-md-1">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
  </button>
  </div>
  </div>
  `;

  const list = document.getElementById('list');
  list.innerHTML += listElement;
 // list.innerHTML = list.innerHTML + listElement
  


}

