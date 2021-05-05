function cargarPagina (pagina, callback) {
  var ajax = new XMLHttpRequest()
  ajax.open('get', pagina, true)
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
      document.getElementById('show-search').innerHTML = ajax.responseText
      if (callback) {
        callback()
      }
    }
  }
  ajax.setRequestHeader('Content-Type', 'text/html; charset=utf-8')
  ajax.send()
}
