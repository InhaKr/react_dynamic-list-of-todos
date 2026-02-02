import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  users: Todo[];
  getModalInfo: (todoId: number) => void;
};

export const TodoList: React.FC<Props> = ({ users, getModalInfo }) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id} data-cy="todo" className="">
            {/* ID */}
            <td className="is-vcentered">{user.id}</td>

            {/* Галочка только если completed */}
            <td className="is-vcentered">
              {user.completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>

            {/* Заголовок с цветом */}
            <td className="is-vcentered is-expanded">
              <p
                className={
                  user.completed ? 'has-text-success' : 'has-text-danger'
                }
              >
                {user.title}
              </p>
            </td>

            {/* Кнопка */}
            <td className="has-text-right is-vcentered">
              <button
                onClick={() => getModalInfo(user.id)}
                data-cy="selectButton"
                className="button"
                type="button"
              >
                <span className="icon">
                  <i className="far fa-eye" />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
