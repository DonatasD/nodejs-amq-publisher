import {PublisherClient} from "./publisher.client";
import {PublisherService} from "./publisher.service";

const mockedPublisherClient = <jest.Mock<PublisherClient>>PublisherClient;

describe("PublisherService", () => {

  beforeEach(() => {
    mockedPublisherClient.mockClear();
  });

  it('should call', () => {
    const MockedService = new PublisherService(new mockedPublisherClient());
    expect(MockedService).toHaveBeenCalledTimes(1);
  })

})
