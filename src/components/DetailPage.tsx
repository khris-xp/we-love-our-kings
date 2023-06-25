"use client"

import { IKing } from "@/interfaces/king";
import Image from "next/image";

async function getKingDataById(id: number) {
  const response = await fetch(`http://localhost:3000/api/kings/${id}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  return {};
}

export default async function DetailPage({ id }: { id: number }) {
  const data: IKing = await getKingDataById(id);
  return (
    <section className="bg-[url('/header-bg.png')] bg-repeat h-full">
      <div className="py-8 text-left lg:py-16 lg:px-12">
        <div className="flex justify-between">
          <div className="flex flex-col justify-start">
            <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-blue-800 md:text-2xl lg:text-4xl">
              {data.name}
            </h1>
            <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left">
              {data.fullName}
            </p>
          </div>
          <div className="flex justify-start">
            <Image
              className="w-40 h-40 rounded"
              src={data.image}
              alt="profile-image"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        {data.work?.map((work, index) => (
          <div key={index} className="mb-8">
            <h2 className="mb-4 text-2xl font-normal tracking-tight leading-none text-blue-800 md:text-xl lg:text-2xl">
              {work.title}
            </h2>
            <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
