import classNames from 'classnames';

const Badge = ({ label, size, additionalClasses }) => (
  <span
    className={classNames(
      ` font-semibold inline-block rounded text-blue-600 bg-blue-100 leading-none`,
      {
        'text-xs p-2': size === 'xs',
        'text-sm p-3': size === 'sm',
        'text-lg p-4': size === 'md'
      },
      additionalClasses
    )}>
    {label}
  </span>
);

export default Badge;
