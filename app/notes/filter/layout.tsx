import React from "react";
import css from "./LayoutNotes.module.css";
import SidebarNotes from "./@sidebar/default";

export default function NotesLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <section className={css.container}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <div className={css.notesWrapper}>
        {props.children}
        {props.modal}
      </div>
    </section>
  );
}

