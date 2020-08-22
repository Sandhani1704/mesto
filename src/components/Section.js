//отвечает за отрисовку элементов на странице
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._array = items;
    //функция, которая отвечает за создание и отрисовку данных на странице.
    this._renderer = renderer;
    //DOM-элемент, найденный по селектору 
    this._container = document.querySelector(containerSelector)

  }
  // вставляем element методом append в поле _container
  addItem(element) {
    this._container.prepend(element);
  }

  setItem(element) {
    this._container.append(element);
  }

  //перебирает массив данных и для каждого элемента массива вызывает renderer
  renderItems() {
    this._array.forEach((item) => {
      this._renderer(item);

    });
  };

}


