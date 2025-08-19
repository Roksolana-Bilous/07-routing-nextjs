import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

interface NotesProps {
    params: Promise<{ slug: string[] }>;
}

export default async function Notes({ params }: NotesProps) {
    const { slug } = await params;
    const tag = slug?.[0] !== "all" ? slug?.[0] : undefined;
    const initialData = await fetchNotes({ tag });
    return <NotesClient initialNotes={initialData} tag={tag} />
}