import { Notification } from 'src/application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      recipiendId: notification.recipientId,
      content: notification.content.value,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
