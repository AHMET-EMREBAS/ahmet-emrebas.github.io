export interface IMessage<User> {
  message: string;
  owner: User;
  receiver: User;
}
