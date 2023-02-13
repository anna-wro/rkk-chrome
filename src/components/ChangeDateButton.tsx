import cx from 'classnames';

export function ChangeDateButton({
  type,
  disabled,
  onClick,
}: {
  type: 'prev' | 'next';
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <div
      className={cx('inline-block select-none px-2', {
        'cursor-pointer': !disabled,
        'text-gray-200': disabled,
      })}
      onClick={disabled ? undefined : onClick}
    >
      {type === 'prev' ? '❮' : '❯'}
    </div>
  );
}
