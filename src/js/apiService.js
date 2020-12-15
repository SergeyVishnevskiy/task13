const keyAPI = '19525294-22d6d1e180bf9905034ff3396';

export default {
  searchQuery: '',
  page: 1,
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${keyAPI}`;

    return fetch(url)
      .then(resolve => resolve.json())
      .then(({ image }) => {
        this.incrementPage();
        return image;
      })
      .catch(error => console.log(error));
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
