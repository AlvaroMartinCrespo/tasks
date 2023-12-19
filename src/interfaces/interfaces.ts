export interface ToastMessage {
  id: number;
  text: string;
}

export interface Task {
  id: number;
  name: string;
  done: boolean;
  user_id: number;
}
