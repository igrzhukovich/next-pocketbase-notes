import Link from "next/link";

export function Note({ note }: any) {
    const { id, title, content, created } = note;

    return (
        <article id="article">
            <Link href={`/notes/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{content}</p>
            <footer>
                <small>{created}</small>
            </footer>
        </article>
    );
}
