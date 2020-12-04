class GetTikets {
    _apiBase = 'https://aviasales-test-api.java-mentor.com/';

    async getResource(rest) {
      // eslint-disable-next-line no-underscore-dangle
      const res = await fetch(`${this._apiBase}${rest}`);
      // eslint-disable-next-line no-console
      console.log(res);
      return res;
    }

    async getSearchId() {
      const res = await this.getResource('search');
      const body = res.json();
      return body;
    }
}

const ticket = new GetTikets();

export default ticket;
