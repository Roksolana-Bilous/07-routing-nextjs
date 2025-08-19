import React, { ReactNode } from "react";
import css from "./LayoutNotes.module.css";
import SidebarNotes from "./@sidebar/default";

export default function NotesLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <div className={css.notesWrapper}>
        {children}
        {modal}
      </div>
    </section>
  );
}
