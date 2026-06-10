import SideBar from "../../custom/SideBar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";

function Model() {
  const sidebarItems = ["Model", "JSON structure"];

  const handleSidebarClick = (item: string) => {
    console.log(item);
  };

  return (
    <div className="flex h-full">
      <SideBar sidebarItems={sidebarItems} onItemClick={handleSidebarClick} />
      <main className="flex-1 p-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Content</TableHead>
              <TableHead className="text-white">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>test</TableCell>
              <TableCell>test</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

export default Model;
