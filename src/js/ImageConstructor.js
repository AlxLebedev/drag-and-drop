/* eslint-disable class-methods-use-this */
export default class ImageConstructor {
  constructor(imagesContainer, errorMessageElement) {
    this.imagesContainer = imagesContainer;
    this.errorMessageElement = errorMessageElement;
    this.selectFileButton = document.querySelector('#select-file-button');
  }

  drawImages(images) {
    for (const image of images) {
      const imageURL = URL.createObjectURL(image);
      this.add('Image', imageURL);
      this.selectFileButton.addEventListener('load', () => {
        URL.revokeObjectURL(imageURL);
      });
    }
  }

  add(imageName, url) {
    const newImage = document.createElement('img');
    newImage.src = url;

    newImage.addEventListener('load', () => {
      this.errorMessageElement.classList.add('hidden');
      newImage.className = 'image-item';
      newImage.alt = imageName;

      const newImageElement = document.createElement('div');

      newImageElement.className = 'image-element';
      newImageElement.innerHTML = '<div class="remove-image">x</div>';
      newImageElement.appendChild(newImage);
      this.imagesContainer.appendChild(newImageElement);
    });

    newImage.addEventListener('error', () => {
      this.errorMessageElement.classList.remove('hidden');
    });
  }
}
