export interface BooksState {
  foo: string;
}

export const initialState: BooksState = {
  foo: 'bar',
};

export interface NoopAction {
  type: 'noop',
}

export type AllActions = NoopAction;

export function booksReducer(state: BooksState | undefined = initialState, action: AllActions): BooksState {
  return state;
}
