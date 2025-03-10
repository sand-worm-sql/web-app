"use client";

import React, { useState } from "react";
import { Database, EllipsisVertical, FileUp, Plus } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
/* import FileImporter from "./FileImporter"; */
/* import TreeNode, { TreeNodeData } from "./TreeNode"; */
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DataExplorer() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const isLoading = false;
  const databases = [];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  /*   const buildTreeData = () => {
    const treeData: TreeNodeData[] = databases.map((db) => ({
      name: db.name,
      type: "database",
      children: db.tables.map((table) => ({
        name: table.name,
        type: "table",
      })),
    }));
    return treeData;
  };
  const treeData = buildTreeData(); */

  /*   if (databases.length === 0 && currentConnection?.scope === "External") {
    return (
      <Card className="h-full overflow-hidden border-none">
        <CardHeader className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg font-semibold">
              External Connection
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 mt-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground text-sm">
                You are connected to an external server. The data explorer is
                disabled for external connections. The external connection is
                yet in alpha stage and will be improved in future updates.
              </p>
              <p>You can still work normally with the query editor.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  } */

  return (
    <Card className="h-full overflow-hidden border-none dark">
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <p className="text-muted-foreground">Loading databases...</p>
        </div>
      )}

      <CardHeader className="p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            <CardTitle className=" font-semibold">Data Explorer</CardTitle>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer p-2 border hover:bg-secondary rounded-md focus:outline-none">
              <EllipsisVertical className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuPortal>
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => setIsSheetOpen(true)}>
                    <FileUp className="h-4 w-4" />
                    Import Data
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenuPortal>
          </DropdownMenu>

          {/*    <FileImporter
            isSheetOpen={isSheetOpen}
            setIsSheetOpen={setIsSheetOpen}
            context={"notEmpty"}
          /> */}
        </div>
      </CardHeader>

      <CardContent className="p-2 h-[calc(100%-60px)] overflow-y-auto">
        {databases.length > 0 ? (
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="m-auto w-[calc(100%-2rem)] focus:ring-0
              "
            />
            <div className="flex items-center justify-between px-2">
              <p className="text-muted-foreground text-xs">
                {databases.length}{" "}
                {databases.length > 1 ? "databases" : "database"}
              </p>
            </div>
            <ul className="ml-2">
              {/*  {treeData.map((node, index) => (
                <TreeNode
                  key={index}
                  node={node}
                  level={0}
                  searchTerm={searchTerm}
                  refreshData={() => {}}
                />
              ))} */}
            </ul>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Database className="h-8 w-8 text-muted-foreground" />
              <p className="text-muted-foreground text-sm px-2">
                No datasets Found. You can upload your data to Sandworm via the
                UI and query it like any other table.
              </p>
            </div>
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => setIsSheetOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Import Data
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
