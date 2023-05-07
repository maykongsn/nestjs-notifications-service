import { Content } from 'src/application/entities/content';
import { Notification } from 'src/application/entities/notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova notificação'),
      category: 'social',
      recipientId: '321-id',
    });

    expect(notification).toBeTruthy();
  });
});
