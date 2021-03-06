class GetTikets {
    _apiBase = 'https://front-test.beta.aviasales.ru/';

    async getResource(rest) {
      // eslint-disable-next-line no-underscore-dangle
      const res = await fetch(`${this._apiBase}${rest}`);
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
