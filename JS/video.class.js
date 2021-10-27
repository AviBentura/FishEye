export default class Video {
  constructor(media, folder) {
    this.id = media.id;
    this.photographerId = media.id;
    this.title = media.title;
    this.video = media.video;
    this.tags = media.tags;
    this.likes = media.likes;
    this.date = media.date;
    this.price = media.price;
    this.folder = folder;
    this.url = `/FishEye_Photos/Photos/${folder}/${media.video}`;
  }

  displayInlist() {
    return `<div class="containerFlex">
          <div>
              <video data-id="${this.id}" class="boxPhoto click-button box-video">
                <source
                  src="${this.url}" class="boxPhoto"
                  type="video/mp4"
                />
              </video>
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
          <video class="box-modal" controls>
            <source
                  src="${this.url}" 
                  type="video/mp4"
                />
          </video>
          <figcaption>${this.title}</figcaption>
        </div>
      </div>`;
  }
}
