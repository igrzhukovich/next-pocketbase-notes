import { Note } from "@/components/note";
import PocketBase from "pocketbase";

async function getNote(id: string) {
    const pb = new PocketBase(process.env.DB_URL);
    const record = await pb.collection("notes").getOne(id);

    return record;
}

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);
    return <Note note={note} />;
}
