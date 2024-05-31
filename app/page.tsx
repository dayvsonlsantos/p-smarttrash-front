"use client"

import Card from "@/components/card";
import { Data } from "@/models/data";
import { useState, useEffect } from "react";

// Inicialize a lista de dados com um array vazio
const initialData: Data[] = [];

let data: Data = {
  date: {
    content: new Date("2024-01-01"),
    description: 'Última atualização'
  },
  volume: {
    content: 0,
    description: 'Volume do lixo'
  },
  rgb: {
    content: "",
    description: 'Cor/Estado atual'
  },
  quant_updates: {
    content: "",
    description: 'Total de atualizações'
  },
  quant_open: {
    content: "",
    description: 'Total de abertura do lixeiro'
  },
  quant_close: {
    content: "",
    description: 'Total de fechamento do lixeiro'
  },
  quant_orange_level: {
    content: "",
    description: 'Quantas vezes no nível laranja'
  }
};

// Função para buscar dados da API
async function fetchData(setData: (data: Data[]) => void) {
  try {
    const response = await fetch('URL_DA_SUA_API');
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }
    const result = await response.json();

    // Supondo que a API retorne uma lista de objetos
    const mappedData = result.map((item: any) => ({
      date: new Date(item.date),
      volume: item.volume ?? 0,
      rgb: item.rgb ?? "",
      quant_updates: item.quant_updates ?? "",
      quant_open: item.quant_open ?? "",
      quant_close: item.quant_close ?? "",
      quant_orange_level: item.quant_orange_level ?? ""
    }));

    setData(mappedData);

  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
  }
}

export default function Home() {
  const [data, setData] = useState<Data[]>(initialData);

  useEffect(() => {
    fetchData(setData);
  }, []);

  // apagar depois
  let teste: { content: string, description: string } = {
    content: 'teste',
    description: 'teste',
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <section className="w-full flex items-center justify-center bg-indigo-600">
        <h1 className="text-2xl font-semibold text-white my-8">Smarttrash Dashboard</h1>
      </section>
      
      {/* {data.map((item, index) => (
        <Card key={index} item={item} />
      ))} */} 

      <section className="flex items-center justify-center flex-col mt-6 sm:flex-row sm:gap-14">
        <Card item={teste}/>
        <Card item={teste}/>
      </section>

    </main>
  );
}
