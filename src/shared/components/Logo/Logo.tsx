interface Props {
  url: string;
  alt: string;
}

export default function Logo({ url, alt }: Props) {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
}
