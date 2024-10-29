import React from "react";

function page() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3 p-2">
      <div className="aspect-video rounded-xl bg-muted" />
      <div className="aspect-video rounded-xl bg-muted" />
      <div className="aspect-video rounded-xl bg-muted" />
    </div>
  );
}

export default page;
