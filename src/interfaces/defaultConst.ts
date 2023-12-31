import { Session } from '@supabase/supabase-js';
import { User } from '@supabase/gotrue-js';
import { Task } from './interfaces';

const userDefault: User = {
  id: '',
  aud: '',
  email: '',
  email_confirmed_at: '',
  phone: '',
  confirmed_at: '',
  app_metadata: {},
  user_metadata: {},
  role: '',
  created_at: '',
  updated_at: '',
};

export const sessionDefault: Session = {
  provider_token: undefined,
  provider_refresh_token: undefined,
  access_token: '',
  refresh_token: '',
  expires_in: Date.now(),
  expires_at: Date.now(),
  token_type: '',
  user: userDefault,
};

export const defaultTask: Task = {
  id: 0,
  name: '',
  user_id: 0,
  done: false,
};
