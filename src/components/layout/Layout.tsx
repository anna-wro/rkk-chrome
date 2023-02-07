import { Title } from './Title';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 py-3 w-72 font-light text-sm">
      <Title />
      {children}
    </div>
  );
}
