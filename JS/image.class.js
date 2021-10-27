export default class Image {
  constructor(media, folder) {
    this.id = media.id;
    this.photographerId = media.id;
    this.title = media.title;
    this.image = media.image;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
    this.folder = folder;
    this.url = `/FishEye_Photos/Photos/${folder}/${media.image}`;
  }

  displayInlist() {
    return `<div class="containerFlex">
          <div>
              <figure class="boxPhoto click-button"><img
              data-id="${this.id}"
                  src="${this.url}"
                  class="boxPhoto"

                />
              </figure>
            <div class="likes">
              <figcaption>${this.title}</figcaption>
              <div class="block">
                <span>${this.likes}</span>
                <i class="fas fa-heart"></i>
              </div>
            </div>
          </div>
        </div>`;
  }

  displayLightBoxContent() {
    return `<div class="modal-bg">
        <div class="zoom-in">
          <div class="btn-close"></div>
          <div class="btn-close fleche-right"></div>
          <div class="btn-close fleche-left"></div>
          <figure>
            <img
              src="${this.url}"
              class="box-modal"
            />
          </figure>
          <figcaption>${this.title}</figcaption>
        </div>
      </div>`;
  }
}
