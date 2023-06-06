"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [date, setDate] = useState("");

  const getKTime = () => {
    const curr = new Date();
    const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000; //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
    const kr_curr = new Date(utc + KR_TIME_DIFF); //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.
    console.log(kr_curr);
    return kr_curr;
  };

  useEffect(() => {
    const nowDate = getKTime();
    setDate(`${nowDate}`);
  }, [date]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>bloggy server test</h1>
      <p>{date}</p>
    </main>
  );
}
