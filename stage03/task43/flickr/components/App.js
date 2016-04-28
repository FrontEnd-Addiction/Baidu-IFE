(() => {
  const container = document.querySelector('.container')
  
  fetchPictures()
    .then(res => res.json())
    .then(pics => {
      container.appendChild(Album(pics))
      
      // lazy loading
      laz({
        selector: '.box img'
      })
    })
   
  function fetchPictures (params) {
    return fetch('http://test.facelending.com:3000/?source=500px&page=1')
  }
})()
