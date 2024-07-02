
interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null;
}


const initialState: UserState = {
  user: null,
}

interface UserAction {
  type: string;
  payload?: User;
}

export function userReducer (state = initialState, action: UserAction) {
  if (action.type === 'user/login') {
    return {
      user: {
        name: "Roberto Moreira",
        email: "robertom@email.com"
      }
    }
  }

  return state;
}
