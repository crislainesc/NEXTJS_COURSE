import Image from "next/image";

function NotFoundPage() {
  const myLoader = ({ src, width, quality }) => {
    return `https://axioma.work/images/UnhealthyLimpEyelashpitviper-max-1mb.gif`;
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#7ce",
        color: "white",
      }}
    >
      <h1>404</h1>
      <Image
        loader={myLoader}
        src="notfound.gif"
        alt="not found image"
        width={300}
        height={300}
      />
      <h1>Page not found</h1>
    </div>
  );
}

export default NotFoundPage;
