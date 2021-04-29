import classNames from 'classnames';

const Alert = ({ type, label, additionalClasses }) => (
  <div
    className={classNames(
      'block rounded text-white text-center p-5 my-5',
      {
        'bg-red-500': type === 'error',
        'bg-blue-500': type === 'confirmation',
        'bg-gray-500': type === 'info'
      },
      `${additionalClasses && additionalClasses}`
    )}>
    {label}
  </div>
);

export default Alert;
