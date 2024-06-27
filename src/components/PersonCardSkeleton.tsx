const PersonCardSkeleton = () => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-6 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col space-x-4">
        <div className="rounded-full bg-slate-700 h-20 w-20 mx-auto" />
        <div className="flex-1 space-y-6 py-1 mt-3">
          <div className="space-y-3">
            <div className="h-2 bg-slate-700 rounded w-[70%] mx-auto" />
            <div className="h-2 bg-slate-700 rounded w-[60%] mx-auto" />
          </div>
          <div className="flex justify-center gap-3">
            <div className="h-9 bg-slate-700 rounded w-20" />
            <div className="h-9 bg-slate-700 rounded w-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCardSkeleton;
