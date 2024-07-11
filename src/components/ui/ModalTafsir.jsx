import React from "react";

export default function ModalTafsir({ modalId, nomor, ayat }) {
  const [tafsir, setTafsir] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function fetchData() {
    const res = await fetch(`https:equran.id/api/v2/tafsir/${nomor}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  React.useEffect(() => {
    fetchData()
      .then((data) => setTafsir(data))
      .catch((error) => setError(error.message));
    //   eslint-disable-next-line
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  function convertNewlinesToBreaks() {
    const text = tafsir?.data?.tafsir[ayat]?.teks;
    return text?.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  }

  return (
    <div>
      <dialog id={modalId} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">
            Tafsir {tafsir?.data?.namaLatin} ayat {ayat}
          </h3>

          <div className="overflow-x-auto h-[50vh] mt-1">
            <p className="py-4 text-sm">{convertNewlinesToBreaks()}</p>
          </div>
        </div>
      </dialog>
    </div>
  );
}
