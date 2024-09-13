export function Sidebar() {
  return (
    <nav className="">
      <aside className="flex grow flex-col gap-y-6 overflow-y-auto p-4">
        <div className="flex-grow">
          <h2 className="text-lg font-semibold pb-5">Product</h2>
          <ul className="flex flex-col gap-y-4">
            <li>
              <a href="/" className="flex items-center gap-x-2">
                <span>Details</span>
              </a>
            </li>
            <li>
              <a href="/compare" className="flex items-center gap-x-2">
                <span>Comparison</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </nav>
  );
}
