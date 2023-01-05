import { Comment } from '@ae/models/inventory/comment';
import { EntitySubscriberInterface, EventSubscriber } from 'typeorm';

@EventSubscriber()
export class CommentSubscriber implements EntitySubscriberInterface {
  listenTo() {
    return Comment;
  }
}
