export const NotFoundView: React.FC = () => {
  return (
    <div className="dark:bg-gray-950 bg-white dark:text-white text-black w-full h-full flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-extrabold">404 Error!</h1>
      <p className="text-xl font-bold">Page not found</p>
    </div>
  );
};
