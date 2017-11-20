import Prajna from '../../../dist/prajna';

describe('prajna.start', () => {
    let prajna;
    before(() => {
        prajna = Prajna.init({
            pageId: 'test',
            channel: 'web'
        });
    });

    it('should start prajna service without error', () => {
        prajna.start();
    });
});
