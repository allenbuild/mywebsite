const iconClass = "size-[1em] shrink-0";

export default function ContactIcon({
  name,
}: {
  name: "email" | "linkedin" | "x";
}) {
  if (name === "email") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm2 1.2v.3l7 4.5 7-4.5v-.3H5zm14 2.5-6.8 4.4a1 1 0 0 1-1.2 0L4 8.7V18h16V8.7z" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M4 4h16v16H4V4zm3.5 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM17 17H7v-1c0-2.2 2.7-3.5 5-3.5s5 1.3 5 3.5v1z" />
      </svg>
    );
  }

  return (
    <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m6.3 5.7 5.7 5.7-5.7 5.7 1.4 1.4 5.7-5.7 5.7 5.7 1.4-1.4-5.7-5.7 5.7-5.7-1.4-1.4-5.7 5.7-5.7-5.7-1.4 1.4z" />
    </svg>
  );
}
