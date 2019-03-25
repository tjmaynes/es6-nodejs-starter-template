import {
    sendMessage
} from './index';

describe("#sendMessage", () => {
    let sandbox;

    beforeEach(function () {
        sandbox = sinon.createSandbox();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it("should resolve with a message", (done) => {
        const message = "Hi mom!";
        sendMessage(message)
            .then(response => {
                expect(response).to.equal(`Received message: ${message}`);
                done();
            })
            .catch(done);
    });

    it("should reject with a message", (done) => {
        const invalidMessage = null;
        sendMessage(invalidMessage).then(done)
            .catch(error => {
                expect(error).to.equal("Invalid message was given!");
                done();
            });
    });
});
