import React from "react";
import Title from "../single/text/Title";
import Regular from "../single/text/Regular";
import TextBox from "../single/TextBox";
import Btn from "../single/Btn";
import { useState } from "react";
import TypeButtons from "./TypeButtons";
import Subtitle from "../single/text/Subtitle";
// import Question

const Tambah = ({ setPeserta, setStep, type, setType }) => {
  const [data, setdata] = useState("");
  const handleLanjut = () => {
    if (!data.trim()) return alert("Input Data Telebih Dahulu");

    const dataAwal = data.split(",").map((n, i) =>
      type == "mikrotik"
        ? {
            id: i,
            nama: n.trim(),
            nilai: {
              crimping: 0,
              hotspot: 0,
              profile: 0,
              walled: 0,
              firewall: 0,
              presentasi: 0,
              kebersihan: 0,
              pengurangan: 0,
              tambahan: 0,
            },
          }
        : type == "website"
          ? {
              id: i,
              nama: n.trim(),
              nilai: {
                design: 0,
                fungsi: 0,
                konten: 0,
                presentasi: 0,
                pengurangan: 0,
                tambahan: 0,
              },
            }
          : {
              id: i,
              nama: n.trim(),
              nilai: {
                tema: 0,
                Typograpy: 0,
                ide: 0,
                warna: 0,
                pengurangan: 0,
                tambahan: 0,
              },
            },
    );

    setPeserta(dataAwal);
    setStep(2);
  };

  return (
    <section className="py-4 flex flex-col gap-3">
      <Title teks={"Tambah List Peserta"} />
      <Subtitle teks={'Pilih Tipe Penilaian'} color="tertiary"/>
      <TypeButtons setType={setType} />
      <Regular teks={"DAFTAR PESERTA (PISAHKAN DENGAN KOMA)"} />
      <TextBox value={data} change={setdata} />
      <Btn teks={"SIMPAN & LANJUT"} click={handleLanjut} />
    </section>
  );
};

export default Tambah;
