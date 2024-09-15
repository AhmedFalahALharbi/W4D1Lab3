let url = `https://rickandmortyapi.com/api/character`;

fetch(url)
  .then(response => response.json())
  .then(data => {
      console.log(data);

      let container = document.getElementById('container');

      let names = data.results.map(a => a.name);
      let images = data.results.map(a => a.image);

      console.log(names);
      console.log(images);

      names.forEach((name, index) => {
          let nameContainer = document.createElement('p');
          let imgContainer = document.createElement('img');
          let imgnameContainer = document.createElement('div');

          nameContainer.textContent = name;
          imgContainer.setAttribute('src', images[index]);
          imgnameContainer.classList.add('imgnameContainer')
          container.appendChild(imgnameContainer);
          imgnameContainer.appendChild(nameContainer);
          imgnameContainer.appendChild(imgContainer);
      });
  })
