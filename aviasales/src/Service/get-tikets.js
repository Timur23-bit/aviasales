
class GetTikets {

    _apiBase = 'https://front-test.beta.aviasales.ru/';

    async getResource (rest) {
        // eslint-disable-next-line no-underscore-dangle
        const res = await fetch(`${this._apiBase}${rest}`);
        const body = await res.json();
        return body;
    }

    async getSearchId () {
        const res = await this.getResource(`search`);
        return res;
    }
}

const ticket = new GetTikets();

export default ticket;