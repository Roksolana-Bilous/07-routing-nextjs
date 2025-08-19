import React from "react";
import css from "./LayoutNotes.module.css"
import SidebarNotes from "./@sidebar/default";

type NotesClientProps = {
    children: React.ReactNode;
    modal?: React.ReactNode;
}

const NotesLayout = ({ children, modal }: NotesClientProps) => {
        return (
        <section className={css.container}>
            <aside className={css.sidebar}><SidebarNotes /></aside>
            <div className={css.notesWrapper}>{children}{modal}</div>
        </section>
    );
}
export default NotesLayout