  import React from "react";
import css from "./LayoutNotes.module.css"
import SidebarNotes from "./@sidebar/default";

type NotesClientProps = {
    children: React.ReactNode;
    sidebar: React.ReactNode;
}

const NotesLayout = ({ children, sidebar }: NotesClientProps) => {
        return (
        <section className={css.container}>
            <aside className={css.sidebar}><SidebarNotes /></aside>
            <div className={css.notesWrapper}>{children}{sidebar}</div>
        </section>
    );
}
export default NotesLayout 

