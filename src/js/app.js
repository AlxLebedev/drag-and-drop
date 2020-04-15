import ImageConstructor from './ImageConstructor';

const imagesContainer = document.querySelector('.images-container');
const errorMessageElement = document.getElementById('error-message');
const selectFileButton = document.querySelector('#select-file-button');
const dragAndDropField = document.querySelector('#drag-and-drop-field');
const imageConstructor = new ImageConstructor(imagesContainer, errorMessageElement);

dragAndDropField.addEventListener('click', () => {
  selectFileButton.value = null;
  selectFileButton.dispatchEvent(new MouseEvent('click'));
});

dragAndDropField.addEventListener('mouseover', () => {
  dragAndDropField.classList.add('dragover');
});

dragAndDropField.addEventListener('mouseout', () => {
  dragAndDropField.classList.remove('dragover');
});

dragAndDropField.addEventListener('dragover', (event) => {
  event.preventDefault();
  dragAndDropField.classList.add('dragover');
});

dragAndDropField.addEventListener('dragleave', (event) => {
  event.preventDefault();
  dragAndDropField.classList.remove('dragover');
});

dragAndDropField.addEventListener('drop', (event) => {
  event.preventDefault();
  const images = Array.from(event.dataTransfer.files);
  imageConstructor.drawImages(images);
});

selectFileButton.addEventListener('input', (event) => {
  const images = Array.from(event.currentTarget.files);
  imageConstructor.drawImages(images);
});

imagesContainer.addEventListener('click', (event) => {
  if (event.target.className === 'remove-image') {
    const imageForDelete = event.target.closest('.image-element');
    imagesContainer.removeChild(imageForDelete);
  }
});
