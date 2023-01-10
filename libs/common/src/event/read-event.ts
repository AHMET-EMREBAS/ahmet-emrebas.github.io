export interface ReadEvent {
  id: number;
  index: number;

  name: string;
  message: string;
  checked: boolean;

  userId: number;
}
