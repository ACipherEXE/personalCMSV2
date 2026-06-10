/**
 * 
 * @returns 
 */

function SideBar({ sidebarItems, onItemClick }: { sidebarItems: string[], onItemClick: (item: string) => void }) {
  return (
    <aside className="w-48 shrink-0 border-r border-gray-700 p-4 space-y-2">
      {sidebarItems.map((item) => (
        <button
          key={item}
          onClick={() => onItemClick(item)}
          className="block w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition-colors cursor-pointer"
        >
          {item}
        </button>
      ))}
    </aside>
  );
}
export default SideBar;
