const INIT = '·';

( () => {
  let status = INIT;
  let td = document.querySelector('table').querySelector('tbody').querySelectorAll('td');
  
  function toggleStatus(current) {
    if(current != INIT) return current;
    status = (status == INIT || status == 'O') ? 'X' : 'O';
    return status;
  }
  function check(i1,i2,i3) {
    return i1 != INIT && (i1 == i2 && i2 == i3);
  }
  function isWin() {
    let d= [];
    for(let i = 0; i < td.length; i++) {
      d.push(td[i].textContent);
    }
    
    if(
      // Rows
      check(d[0],d[1],d[2]) ||
      check(d[3],d[4],d[5]) ||
      check(d[6],d[7],d[8]) ||
      // Cols
      check(d[0],d[3],d[6]) ||
      check(d[1],d[4],d[7]) ||
      check(d[2],d[5],d[8]) ||
      // Others
      check(d[0],d[4],d[8]) ||
      check(d[2],d[4],d[6])
    ) {
      setTimeout( () => {
        alert(`"${status}" ganhou!!!`);
        for(let i = 0; i < td.length; i++) {
          td[i].textContent = INIT;
        }
      }, 100);
    }
  }
  for(let i = 0; i < td.length; i++) {
    td[i].textContent = INIT;
    td[i].style.width = td[i].offsetHeight + 'px';
    td[i].addEventListener('click', event => {
      event.preventDefault();
      event.target.textContent = toggleStatus(
        event.target.textContent
      );
      isWin();
    });
  }
})();
