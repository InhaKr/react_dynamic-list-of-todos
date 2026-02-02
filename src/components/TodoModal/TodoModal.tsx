import React from 'react';
// import { Loader } from '../Loader';

type TodoModalProps = {
  modal: boolean;
  todo: Todo | undefined;
  user: User | undefined;
  closeModal: () => void;
};

export const TodoModal: React.FC<TodoModalProps> = ({
  // users,
  modal,
  todo,
  user,
  closeModal,
}) => {
  if (!modal || !todo) {
    return null;
  }

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" onClick={closeModal} />

      <div className="modal-card">
        <header className="modal-card-head">
          <div
            className="modal-card-title has-text-weight-medium"
            data-cy="modal-header"
          >
            Todo #{todo.id}
          </div>

          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            type="button"
            className="delete"
            data-cy="modal-close"
            onClick={closeModal}
          />
        </header>

        <div className="modal-card-body">
          <p className="block" data-cy="modal-title">
            {todo.title}
          </p>

          <p className="block" data-cy="modal-user">
            {/* <strong className="has-text-success">Done</strong> */}
            <strong className="has-text-danger">
              {todo.completed ? 'Done' : 'Planned'}
            </strong>
            {' by '}
            {user && <a href={`mailto:${user.email}`}>{user.name}</a>}{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
