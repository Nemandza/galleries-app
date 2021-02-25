import BaseService from './BaseService';

class GalleriesService extends BaseService {
  async getGalleries() {
    const { data } = await this.http.get('/galleries');
    return data;
  }

  async getGallery(id) {
    const { data } = await this.http.get(`/galleries/${id}`);
    return data;
  }

  async createGallery(gallery) {
    const { data } = await this.http.post('galleries', gallery);
    return data;
  }

  async updateGallery(id, gallery) {
    const { data } = await this.http.put(`/galleries/${id}`, gallery);
    return data;
  }

  async deleteGallery(id) {
    const { data } = await this.http.delete(`/galleries/${id}`);
    return data;
  }
}
