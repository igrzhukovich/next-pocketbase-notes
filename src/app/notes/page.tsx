import { Note } from "@/components/note";
import PocketBase from "pocketbase";

async function getNotes() {
    const pb = new PocketBase("http://127.0.0.1:8090");
    const records = await pb.collection("notes").getFullList({
        sort: "-created",
    });

    return records;
}

export default async function NotesPage() {
    const notes = await getNotes();
    return (
        <div>
            <h2>List of Notes</h2>
            <div>
                {notes.map((note) => (
                    <Note note={note} key={note.id} />
                ))}
            </div>
        </div>
    );
}
