import copy from '../../consts/copy';

export function Title() {
  return (
    <div className="flex items-center mb-3">
      <div>
        <img
          src="icons/icon_128.png"
          alt={copy.logoAlt}
          width="72"
          height="72"
          className="cursor-pointer"
        />
      </div>
      <div className="ml-2">
        <a href="https://lg.starokatolicy.eu" target="_blank">
          <div className="cursor-pointer">
            <h1 className="text-lg font-bold hover:text-gray-900 dark:hover:text-red-400">
              {copy.name}
            </h1>
            <h2 className="text-xs text-gray-800 hover:text-gray-800 dark:text-white/90 dark:hover:text-red-400">
              {copy.subtitle}
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}
