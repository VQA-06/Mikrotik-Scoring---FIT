import React from "react";
import Title from "../single/text/Title";
import Regular from "../single/text/Regular";
import TextBox from "../single/TextBox";
import Btn from "../single/Btn";
import { useState } from "react";
// import Question

const Tambah = ({setPeserta, setStep}) => {
  const [data, setdata] = useState("");
  const handleLanjut = () => {
    if (!data.trim()) return(alert("Input Data Telebih Dahulu"))
    
    const dataAwal = data.split(',').map((n, i) => ({
        "id": i,
        "nama": n.trim(),
        "nilai": {
            "crimping": 0,
            "hotspot": 0,
            "profile": 0,
            "walled": 0,
            "firewall": 0,
            "presentasi": 0,
            "kebersihan": 0,
            "pengurangan": 0,
            "tambahan": 0
        }
    }));

    setPeserta(dataAwal);
    setStep(2);
  }

  return (
    <section className="py-4 flex flex-col gap-3">
      <Title teks={"Tambah List Peserta"} />
      <Regular teks={"DAFTAR PESERTA (PISAHKAN DENGAN KOMA)"} />
      <TextBox value={data} change={setdata} />
      <Btn teks={"SIMPAN & LANJUT"} click={handleLanjut} />
    </section>
  );
};

export default Tambah;
