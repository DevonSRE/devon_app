import { convertDriveUrl } from "@/lib/utils";

export function DriveImage({
  src,
  ref,
  ...props
}: React.ComponentProps<"img"> & { src: string }) {
  const link = convertDriveUrl(src);
  return <img {...props} ref={ref} src={link} />;
}

/*
export function TestImage() {
  const fileId = "1xAB9xHl2Qxvskfp0cG5gseWdmy8cIWDU";

  const urls = [
    {
      label: "View Format",
      url: `https://drive.google.com/uc?export=view&id=${fileId}`,
    },
    {
      label: "Download Format",
      url: `https://drive.google.com/uc?id=${fileId}&export=download`,
    },
    {
      label: "Thumbnail",
      url: `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
    },
  ];

  return (
    <div>
      <h1>Testing Google Drive Image</h1>
      <p>File ID: {fileId}</p>

      {urls.map((item, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h3>{item.label}</h3>
          <p>URL: {item.url}</p>
          <img
            src={item.url}
            alt={`Test ${index}`}
            style={{ maxWidth: "300px", border: "1px solid red" }}
            onError={(e) => console.log(`Failed: ${item.label}`)}
            onLoad={(e) => console.log(`Success: ${item.label}`)}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
*/
